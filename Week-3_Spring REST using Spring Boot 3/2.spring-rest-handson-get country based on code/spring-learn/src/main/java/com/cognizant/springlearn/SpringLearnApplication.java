package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Entry point for the Spring Boot REST application.
 *
 * <p>Spring Boot auto-configures an embedded Tomcat server on port 8083
 * (set in application.properties) and registers all @RestController
 * classes found under this package via component-scanning.
 */
@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {

        LOGGER.info("Start main()");

        SpringApplication.run(SpringLearnApplication.class, args);

        LOGGER.info("End main() - Spring Boot application started successfully");
    }
}
