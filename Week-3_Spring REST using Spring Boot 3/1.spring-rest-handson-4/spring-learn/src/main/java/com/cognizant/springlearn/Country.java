package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * POJO representing a country supported by the airline booking website.
 *
 * <p>Spring's IoC container will:
 * <ol>
 *   <li>Call the no-arg constructor to create an instance.</li>
 *   <li>Call each setter listed as {@code <property>} in country.xml to inject values.</li>
 * </ol>
 *
 * <p>Debug log statements let you trace exactly which constructor / getter / setter
 * is called and in what order when {@code context.getBean()} is invoked.
 */
public class Country {

    private static final Logger LOGGER = LoggerFactory.getLogger(Country.class);

    /** Two-character ISO 3166-1 alpha-2 country code (e.g. "IN", "US"). */
    private String code;

    /** Human-readable country name (e.g. "India"). */
    private String name;

    // -----------------------------------------------------------------------
    // No-argument constructor
    // -----------------------------------------------------------------------

    /**
     * Spring requires a no-arg constructor to instantiate the bean via reflection.
     * The debug log here proves the constructor is called first, before any setters.
     */
    public Country() {
        LOGGER.debug("Inside Country Constructor.");
    }

    // -----------------------------------------------------------------------
    // Getters & Setters
    // -----------------------------------------------------------------------

    public String getCode() {
        LOGGER.debug("Inside getCode(). Returning code : {}", code);
        return code;
    }

    public void setCode(String code) {
        LOGGER.debug("Inside setCode(). Setting code : {}", code);
        this.code = code;
    }

    public String getName() {
        LOGGER.debug("Inside getName(). Returning name : {}", name);
        return name;
    }

    public void setName(String name) {
        LOGGER.debug("Inside setName(). Setting name : {}", name);
        this.name = name;
    }

    // -----------------------------------------------------------------------
    // toString
    // -----------------------------------------------------------------------

    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }
}
