package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST Controller that exposes a simple Hello World endpoint.
 *
 * <p><b>Endpoint:</b>
 * <pre>
 *   GET http://localhost:8083/hello
 *   Response: Hello World!!
 * </pre>
 *
 * <p>{@code @RestController} is a convenience annotation that combines
 * {@code @Controller} and {@code @ResponseBody}. It tells Spring MVC
 * that every method return value is written directly to the HTTP response
 * body (no view resolution), making it perfect for REST APIs.
 */
@RestController
public class HelloController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(HelloController.class);

    /**
     * Handles HTTP GET requests sent to {@code /hello}.
     *
     * <p>Spring MVC maps the request using {@code @GetMapping("/hello")}
     * and writes the returned {@code String} straight into the
     * HTTP response body with Content-Type {@code text/plain}.
     *
     * @return the hard-coded greeting string "Hello World!!"
     */
    @GetMapping("/hello")
    public String sayHello() {

        LOGGER.info("Start sayHello()");

        // Hard-coded response string as per the handson requirement
        String response = "Hello World!!";

        LOGGER.info("End sayHello()");

        return response;
    }
}
