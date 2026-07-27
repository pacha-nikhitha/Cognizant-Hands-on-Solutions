package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Entry point for the Spring Boot application.
 *
 * <p>Handson-4 goal: demonstrate Spring Core XML-based bean configuration.
 * {@link #displayCountry()} reads {@code country.xml} from the classpath,
 * retrieves the "country" bean, and logs its details.
 */
@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    // -----------------------------------------------------------------------
    // main
    // -----------------------------------------------------------------------

    public static void main(String[] args) {

        System.out.println("Inside Main Method");

        SpringApplication.run(SpringLearnApplication.class, args);

        // Invoke the displayCountry method after the Spring Boot context starts
        displayCountry();

        System.out.println("Application Started Successfully");
    }

    // -----------------------------------------------------------------------
    // displayCountry
    // -----------------------------------------------------------------------

    /**
     * Reads the Spring XML configuration file {@code country.xml} from the
     * classpath using {@link ClassPathXmlApplicationContext}, retrieves the
     * "country" bean, and logs the country details.
     *
     * <p><b>What happens step-by-step when this method runs:</b>
     * <ol>
     *   <li>{@code new ClassPathXmlApplicationContext("country.xml")} — Spring
     *       parses the XML, discovers the {@code <bean id="country" ...>}
     *       definition, calls {@code Country()} (no-arg constructor), then
     *       calls {@code setCode("IN")} and {@code setName("India")} to inject
     *       the property values.</li>
     *   <li>{@code context.getBean("country", Country.class)} — Spring looks up
     *       the already-created singleton bean by id and returns it cast to
     *       {@code Country}. No new object is created at this point.</li>
     *   <li>The LOGGER statement calls {@code country.toString()} to produce
     *       the human-readable output.</li>
     * </ol>
     */
    private static void displayCountry() {

        LOGGER.debug("Start displayCountry()");

        // 1. Load the Spring XML configuration from the classpath (src/main/resources/country.xml)
        //    ClassPathXmlApplicationContext implements ApplicationContext.
        //    At this point Spring instantiates all singleton beans defined in the file.
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        // 2. Retrieve the bean by its id "country" and cast it to Country.
        //    context.getBean() returns the already-instantiated singleton — it does NOT
        //    create a new object on each call (for singleton-scoped beans, which is the default).
        Country country = context.getBean("country", Country.class);

        // 3. Log the country details using toString()
        LOGGER.debug("Country : {}", country.toString());

        LOGGER.debug("End displayCountry()");
    }
}
