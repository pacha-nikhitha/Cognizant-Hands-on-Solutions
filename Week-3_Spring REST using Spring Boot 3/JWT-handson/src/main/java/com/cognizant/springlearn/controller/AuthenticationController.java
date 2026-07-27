package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.security.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Map;

/**
 * REST Controller that acts as the JWT Authentication Service.
 *
 * <p><b>Full 3-step JWT process implemented here:</b>
 *
 * <p><b>Step 1 – Receive credentials via Basic Auth header:</b>
 * <pre>
 *   curl -s -u user:pwd http://localhost:8090/authenticate
 * </pre>
 * The {@code -u user:pwd} flag tells curl to send an HTTP header:
 * <pre>
 *   Authorization: Basic dXNlcjpwd2Q=
 * </pre>
 * where {@code dXNlcjpwd2Q=} is Base64("user:pwd").
 *
 * <p><b>Step 2 – Read and decode the Authorization header:</b>
 * <ol>
 *   <li>Extract the {@code Authorization} header value.</li>
 *   <li>Strip the {@code "Basic "} prefix.</li>
 *   <li>Base64-decode to get {@code "user:pwd"}.</li>
 *   <li>Split on {@code ":"} to get username and password separately.</li>
 * </ol>
 *
 * <p><b>Step 3 – Authenticate and generate JWT:</b>
 * <ol>
 *   <li>Delegate to Spring Security's {@link AuthenticationManager}, which
 *       calls the {@code UserDetailsService} → {@code PasswordEncoder} chain.</li>
 *   <li>On success, call {@link JwtUtil#generateToken(String)} with the
 *       authenticated username.</li>
 *   <li>Return the token as JSON: {@code {"token":"eyJhbGci..."}}</li>
 * </ol>
 *
 * <p><b>Expected response:</b>
 * <pre>
 *   {"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNTcwMzc5NDc0LCJleHAiOjE1NzAzODA2NzR9.t3LRvlCV-hwKfoqZYlaVQqEUiBloWcWn0ft3tgv0dL0"}
 * </pre>
 */
@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    /**
     * Spring Security's central authentication entry point.
     *
     * <p>Internally uses {@code DaoAuthenticationProvider} which calls
     * {@code UserDetailsService.loadUserByUsername()} and compares the
     * BCrypt-encoded password from the in-memory store.
     */
    @Autowired
    private AuthenticationManager authenticationManager;

    /**
     * JWT utility for generating signed tokens.
     */
    @Autowired
    private JwtUtil jwtUtil;

    /**
     * Authenticates a user via HTTP Basic Auth and returns a JWT token.
     *
     * <p><b>Step 2 – Read Authorization header and decode username/password:</b>
     * <ul>
     *   <li>curl sends: {@code Authorization: Basic dXNlcjpwd2Q=}</li>
     *   <li>We strip "Basic ", Base64-decode, and split on ":".</li>
     * </ul>
     *
     * <p><b>Step 3 – Generate token based on the authenticated user:</b>
     * <ul>
     *   <li>Spring's {@link AuthenticationManager#authenticate} validates credentials.</li>
     *   <li>{@link JwtUtil#generateToken} creates a signed JWT for the username.</li>
     * </ul>
     *
     * @param authorizationHeader the raw {@code Authorization} HTTP header value
     *                            (e.g., {@code Basic dXNlcjpwd2Q=})
     * @return a JSON map containing the generated JWT under the key {@code "token"}
     * @throws Exception if authentication fails (wrong username/password)
     */
    @GetMapping("/authenticate")
    public Map<String, String> authenticate(
            @RequestHeader("Authorization") String authorizationHeader) throws Exception {

        LOGGER.info("Start authenticate()");
        LOGGER.debug("Authorization header received: {}", authorizationHeader);

        // -----------------------------------------------------------------------
        // Step 2: Read Authorization header and decode username + password
        // -----------------------------------------------------------------------

        // The header looks like: "Basic dXNlcjpwd2Q="
        // Strip the "Basic " prefix (7 characters)
        String base64Credentials = authorizationHeader.substring("Basic ".length());
        LOGGER.debug("Base64 credentials: {}", base64Credentials);

        // Base64-decode to get "user:pwd"
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
        String decodedCredentials = new String(decodedBytes, StandardCharsets.UTF_8);
        LOGGER.debug("Decoded credentials string: user:****");

        // Split on ":" – the first part is username, rest is password
        // Using limit=2 to handle passwords that contain ":"
        String[] parts = decodedCredentials.split(":", 2);
        String username = parts[0];
        String password = parts[1];

        LOGGER.info("Attempting authentication for username: {}", username);

        // -----------------------------------------------------------------------
        // Step 3a: Authenticate via Spring Security's AuthenticationManager
        // -----------------------------------------------------------------------
        // This internally calls UserDetailsService.loadUserByUsername(username)
        // and verifies the BCrypt-encoded password from the in-memory store.
        // Throws BadCredentialsException if the credentials are wrong.
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password)
        );

        LOGGER.info("Authentication successful for: {}", authentication.getName());

        // -----------------------------------------------------------------------
        // Step 3b: Generate JWT token for the authenticated user
        // -----------------------------------------------------------------------
        // Use the username from the Authentication object (not from the header)
        // to ensure we use the canonical username from the UserDetails store.
        String token = jwtUtil.generateToken(authentication.getName());

        LOGGER.info("End authenticate() - JWT token generated and returned");

        // Return as JSON: {"token": "eyJhbGci..."}
        return Map.of("token", token);
    }
}
