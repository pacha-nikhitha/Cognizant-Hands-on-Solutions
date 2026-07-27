package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST Controller that exposes country-lookup endpoints.
 *
 * <p><b>Endpoint:</b>
 * <pre>
 *   GET http://localhost:8083/countries/{code}
 *   Example: GET http://localhost:8083/countries/in
 *   Response: { "code": "IN", "name": "India" }
 * </pre>
 *
 * <p>{@code @RestController} = {@code @Controller} + {@code @ResponseBody}.
 * The returned {@link Country} POJO is automatically serialised to JSON by
 * Jackson ({@code MappingJackson2HttpMessageConverter}) which Spring Boot
 * registers on the classpath when {@code spring-boot-starter-web} is present.
 */
@RestController
public class CountryController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(CountryController.class);

    /**
     * {@link CountryService} injected by Spring via constructor injection.
     * The service encapsulates the business logic for finding a country.
     */
    @Autowired
    private CountryService countryService;

    /**
     * Returns the country matching the given ISO 3166-1 alpha-2 code.
     *
     * <p><b>What happens step-by-step:</b>
     * <ol>
     *   <li>Spring MVC receives {@code GET /countries/{code}} and routes here.</li>
     *   <li>{@code @PathVariable} binds the URL segment to the {@code code} parameter.</li>
     *   <li>{@link CountryService#getCountry(String)} is called with that code.</li>
     *   <li>The service loads {@code country.xml}, finds a case-insensitive match,
     *       and returns the matching {@link Country} (or {@code null} if not found).</li>
     *   <li>Jackson converts the returned POJO to a JSON response body.</li>
     * </ol>
     *
     * @param code ISO 3166-1 alpha-2 country code from the URL (case insensitive)
     * @return matching {@link Country} serialised as JSON
     */
    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {

        LOGGER.info("Start getCountry() - code={}", code);

        // Delegate to CountryService – it handles XML loading + case-insensitive match
        Country country = countryService.getCountry(code);

        LOGGER.debug("Returning country: {}", country);

        LOGGER.info("End getCountry()");

        return country;   // Jackson converts this POJO → JSON automatically
    }
}
