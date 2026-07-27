package com.cognizant.springlearn.service;

import com.cognizant.springlearn.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service class that provides country-lookup operations.
 *
 * <p>Countries are loaded from {@code country.xml} (a Spring XML bean
 * configuration on the classpath).  The XML file defines a
 * {@code util:list} bean named {@code "countryList"} that contains all
 * available {@link Country} objects.
 */
@Service
public class CountryService {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(CountryService.class);

    /**
     * Returns the {@link Country} whose code matches {@code code},
     * ignoring case differences (e.g. "in", "IN", "In" all match India).
     *
     * <p><b>Implementation steps:</b>
     * <ol>
     *   <li>Load {@code country.xml} via {@link ClassPathXmlApplicationContext}.</li>
     *   <li>Retrieve the {@code "countryList"} bean – a {@code List<Country>}.</li>
     *   <li>Use a lambda / stream to find the first country whose code
     *       matches {@code code} case-insensitively.</li>
     *   <li>Return the matched {@link Country}, or {@code null} if none found.</li>
     * </ol>
     *
     * @param code the ISO 3166-1 alpha-2 country code from the URL path variable
     * @return matching {@link Country}, or {@code null} if not found
     */
    public Country getCountry(String code) {

        LOGGER.info("Start getCountry() - code={}", code);

        // Step 1: Load country.xml from the classpath (src/main/resources)
        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        // Step 2: Retrieve the list of all countries defined in country.xml
        @SuppressWarnings("unchecked")
        List<Country> countryList =
                (List<Country>) context.getBean("countryList");

        LOGGER.debug("Loaded {} countries from country.xml", countryList.size());

        // Step 3 & 4: Use a lambda / stream to find the first case-insensitive match
        Country result = countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);

        LOGGER.debug("Match for code '{}': {}", code, result);

        LOGGER.info("End getCountry()");

        return result;
    }
}
