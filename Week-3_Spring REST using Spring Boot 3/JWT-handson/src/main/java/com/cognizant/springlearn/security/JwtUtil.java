package com.cognizant.springlearn.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Utility class responsible for JWT creation and validation.
 *
 * <p><b>Step 3 of JWT flow – Generate token:</b>
 * <ol>
 *   <li>Builds a signing key using HMAC-SHA256 (HS256).</li>
 *   <li>Sets standard JWT claims: {@code sub} (subject = username),
 *       {@code iat} (issued-at), {@code exp} (expiry = 20 minutes).</li>
 *   <li>Signs and compacts the token to a Base64url-encoded string.</li>
 * </ol>
 *
 * <p>Example token structure (decoded):
 * <pre>
 *   Header:  {"alg":"HS256"}
 *   Payload: {"sub":"user","iat":1570379474,"exp":1570380674}
 *   Signature: HMAC-SHA256(header.payload, secretKey)
 * </pre>
 *
 * <p><b>Important:</b> In production, store the secret key in an external
 * vault or environment variable. Never hard-code it in source code.
 */
@Component
public class JwtUtil {

    private static final Logger LOGGER = LoggerFactory.getLogger(JwtUtil.class);

    /**
     * Token validity: 20 minutes (1 200 000 milliseconds).
     *
     * <p>Short-lived tokens reduce the attack window if a token is stolen.
     * Refresh tokens handle long-lived sessions.
     */
    private static final long TOKEN_VALIDITY_MS = 20 * 60 * 1000L;  // 20 minutes

    /**
     * Cryptographic signing key derived from a fixed secret.
     *
     * <p>JJWT's {@link Keys#hmacShaKeyFor(byte[])} validates that the key
     * byte-length is sufficient for HS256 (≥ 256 bits / 32 bytes).
     *
     * <p><b>Production note:</b> Replace this hard-coded secret with a value
     * injected via {@code @Value("${jwt.secret}")} from {@code application.properties}
     * or an environment variable.
     */
    private final Key signingKey = Keys.hmacShaKeyFor(
            "cognizant-jwt-secret-key-32-bytes!".getBytes()
    );

    /**
     * Generates a signed JWT token for the given username.
     *
     * <p><b>Claim breakdown:</b>
     * <ul>
     *   <li>{@code sub}  – Subject: identifies the principal (the username).</li>
     *   <li>{@code iat}  – Issued At: current timestamp in seconds since epoch.</li>
     *   <li>{@code exp}  – Expiration: {@code iat + TOKEN_VALIDITY_MS}.</li>
     * </ul>
     *
     * @param username the authenticated username to embed in the token
     * @return a compact, URL-safe JWT string (header.payload.signature)
     */
    public String generateToken(String username) {
        LOGGER.info("Start generateToken() for user: {}", username);

        Map<String, Object> claims = new HashMap<>();
        // Add any custom claims here if needed (e.g., roles, tenant ID)

        Date now = new Date();
        Date expiry = new Date(now.getTime() + TOKEN_VALIDITY_MS);

        String token = Jwts.builder()
                .setClaims(claims)               // custom claims (empty here)
                .setSubject(username)            // sub claim = username
                .setIssuedAt(now)                // iat claim = current time
                .setExpiration(expiry)           // exp claim = now + 20 min
                .signWith(signingKey, SignatureAlgorithm.HS256)  // sign with HS256
                .compact();                      // serialize to Base64url string

        LOGGER.info("End generateToken() - token generated successfully");
        LOGGER.debug("Token expiry: {}", expiry);

        return token;
    }

    /**
     * Extracts the username (subject) from a JWT token.
     *
     * <p>This will be used in future hands-on exercises when validating
     * the JWT in incoming requests to protected endpoints.
     *
     * @param token the JWT string
     * @return the username stored in the {@code sub} claim
     */
    public String extractUsername(String token) {
        LOGGER.info("Extracting username from token");
        return Jwts.parserBuilder()
                .setSigningKey(signingKey)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    /**
     * Validates whether a JWT token is non-expired and belongs to the given user.
     *
     * <p>This will be used in future hands-on exercises for protecting endpoints.
     *
     * @param token    the JWT string to validate
     * @param username the expected username
     * @return {@code true} if the token is valid and not expired
     */
    public boolean validateToken(String token, String username) {
        LOGGER.info("Validating token for user: {}", username);
        try {
            String extractedUsername = extractUsername(token);
            Date expiration = Jwts.parserBuilder()
                    .setSigningKey(signingKey)
                    .build()
                    .parseClaimsJws(token)
                    .getBody()
                    .getExpiration();
            boolean isValid = extractedUsername.equals(username) && expiration.after(new Date());
            LOGGER.info("Token valid: {}", isValid);
            return isValid;
        } catch (Exception e) {
            LOGGER.error("Token validation failed: {}", e.getMessage());
            return false;
        }
    }
}
