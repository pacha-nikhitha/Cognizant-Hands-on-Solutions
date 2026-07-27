package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST Controller that exposes country-related endpoints.
 *
 * <p><b>Endpoint:</b>
 * <pre>
 *   GET http://localhost:8083/country
 *   Response: { "code": "IN", "name": "India" }
 * </pre>
 *
 * <p>{@code @RestController} combines {@code @Controller} and
 * {@code @ResponseBody}.  The {@code @ResponseBody} part instructs Spring MVC
 * to pass the return value to an {@code HttpMessageConverter} instead of a
 * view resolver.  Because {@code spring-boot-starter-web} includes Jackson on
 * the classpath, Spring automatically registers
 * {@code MappingJackson2HttpMessageConverter}, which serialises any Java object
 * to JSON.  That is how the {@link Country} POJO becomes the JSON response body.
 */
@RestController
public class CountryController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(CountryController.class);

    /**
     * Returns India's country details loaded from the Spring XML configuration.
     *
     * <p><b>What happens in this method (step-by-step):</b>
     * <ol>
     *   <li>Spring MVC receives {@code GET /country} and routes it here because
     *       of {@code @RequestMapping("/country")}.</li>
     *   <li>A {@link ClassPathXmlApplicationContext} is created, pointing to
     *       {@code country.xml} on the classpath (inside {@code src/main/resources}).</li>
     *   <li>Spring reads {@code country.xml}, instantiates the {@code Country}
     *       class using its no-arg constructor, and injects "IN" / "India" via
     *       the setter methods ({@code setCode} / {@code setName}).</li>
     *   <li>The {@code india} bean is retrieved by its bean id.</li>
     *   <li>The {@code Country} object is returned from the method.</li>
     *   <li>Because of {@code @ResponseBody} (via {@code @RestController}),
     *       Jackson serialises the object to JSON:
     *       {@code {"code":"IN","name":"India"}}.</li>
     *   <li>Spring sets {@code Content-Type: application/json} in the
     *       HTTP response header automatically.</li>
     * </ol>
     *
     * @return {@link Country} object representing India; Jackson converts it to JSON.
     */
    @RequestMapping("/country")
    public Country getCountryIndia() {

        LOGGER.info("Start getCountryIndia()");

        // Load the Spring XML application context from the classpath
        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        // Retrieve the "india" bean defined in country.xml
        Country country = (Country) context.getBean("india");

        LOGGER.debug("Country loaded: {}", country);

        LOGGER.info("End getCountryIndia()");

        return country;   // Jackson converts this POJO → JSON automatically
    }
}
