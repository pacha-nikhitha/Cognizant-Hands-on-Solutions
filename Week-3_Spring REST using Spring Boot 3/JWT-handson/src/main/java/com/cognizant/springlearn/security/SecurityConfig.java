package com.cognizant.springlearn.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Spring Security configuration for the JWT Authentication Service.
 *
 * <p><b>What this class does (Step 1 of JWT flow):</b>
 * <ol>
 *   <li>Permits all requests to {@code /authenticate} without any credentials
 *       so the Authentication Controller can receive the Basic Auth header and
 *       validate it manually, then issue a JWT.</li>
 *   <li>Disables HTTP Basic filter and CSRF (stateless REST API).</li>
 *   <li>Registers an in-memory user {@code user/pwd} for demonstration.</li>
 *   <li>Exposes {@link AuthenticationManager} as a Spring bean so the
 *       {@link com.cognizant.springlearn.controller.AuthenticationController}
 *       can delegate credential verification to it.</li>
 * </ol>
 *
 * <p><b>Security design note:</b> All other endpoints (besides /authenticate)
 * require a valid JWT bearer token validated by the JWT filter (to be added
 * in subsequent hands-on exercises).
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private static final Logger LOGGER = LoggerFactory.getLogger(SecurityConfig.class);

    /**
     * Configures the HTTP security filter chain.
     *
     * <p>Key decisions:
     * <ul>
     *   <li>{@code /authenticate} → permitAll so curl -u user:pwd can reach the controller.</li>
     *   <li>CSRF disabled – REST APIs are stateless; CSRF tokens are for browser sessions.</li>
     *   <li>HTTP Basic disabled – we handle the Authorization header manually in the controller.</li>
     *   <li>All other requests → authenticated (secured for future JWT filter hands-on).</li>
     * </ul>
     *
     * @param http the {@link HttpSecurity} builder provided by Spring Security
     * @return the configured {@link SecurityFilterChain}
     * @throws Exception if security configuration fails
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        LOGGER.info("Configuring SecurityFilterChain");

        http
            // Disable CSRF – not needed for stateless REST APIs
            .csrf(csrf -> csrf.disable())

            // Disable HTTP Basic – we manually decode the Authorization header
            .httpBasic(httpBasic -> httpBasic.disable())

            // Authorization rules
            .authorizeHttpRequests(auth -> auth
                // Step 1: Allow /authenticate without credentials
                // The controller reads the Basic Auth header and validates manually
                .requestMatchers("/authenticate").permitAll()

                // All other requests must be authenticated
                .anyRequest().authenticated()
            );

        return http.build();
    }

    /**
     * In-memory user store for demonstration.
     *
     * <p>Registers a single user:
     * <ul>
     *   <li><b>Username:</b> user</li>
     *   <li><b>Password:</b> pwd (BCrypt-encoded internally)</li>
     *   <li><b>Role:</b> USER</li>
     * </ul>
     *
     * <p>In a production application, replace this with a
     * {@code JdbcUserDetailsManager} or a custom {@code UserDetailsService}
     * backed by a database.
     *
     * @param passwordEncoder the {@link PasswordEncoder} bean
     * @return a {@link UserDetailsService} backed by in-memory storage
     */
    @Bean
    public UserDetailsService userDetailsService(PasswordEncoder passwordEncoder) {
        LOGGER.info("Registering in-memory user: user/pwd");

        UserDetails user = User.builder()
                .username("user")
                .password(passwordEncoder.encode("pwd"))
                .roles("USER")
                .build();

        return new InMemoryUserDetailsManager(user);
    }

    /**
     * BCrypt password encoder bean.
     *
     * <p>BCrypt automatically salts the hash, making it resistant to
     * rainbow-table attacks. Work factor defaults to 10 rounds.
     *
     * @return a {@link BCryptPasswordEncoder} instance
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * Exposes Spring's {@link AuthenticationManager} as a bean.
     *
     * <p>The {@link com.cognizant.springlearn.controller.AuthenticationController}
     * auto-wires this bean to delegate username/password validation to Spring
     * Security's {@code DaoAuthenticationProvider}, which internally calls
     * {@link UserDetailsService#loadUserByUsername(String)} and compares the
     * BCrypt-encoded password.
     *
     * @param authConfig Spring's {@link AuthenticationConfiguration}
     * @return the application-level {@link AuthenticationManager}
     * @throws Exception if manager cannot be retrieved
     */
    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authConfig) throws Exception {
        LOGGER.info("Exposing AuthenticationManager bean");
        return authConfig.getAuthenticationManager();
    }
}
