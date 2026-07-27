package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Domain model representing a Country.
 *
 * <p>Jackson (bundled with spring-boot-starter-web) automatically serializes
 * instances of this POJO to JSON when returned from a @RestController method.
 * For that to work the class needs:
 *   <ul>
 *     <li>A no-arg constructor (Java provides one implicitly when no other
 *         constructor is declared).</li>
 *     <li>Public getter methods for every field to be included in the JSON.</li>
 *   </ul>
 */
public class Country {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(Country.class);

    /** ISO 3166-1 alpha-2 country code (e.g. "IN" for India). */
    private String code;

    /** Human-readable country name (e.g. "India"). */
    private String name;

    // ------------------------------------------------------------------
    // No-arg constructor – required by Spring XML bean instantiation
    // ------------------------------------------------------------------

    public Country() {
        LOGGER.debug("Country bean created");
    }

    // ------------------------------------------------------------------
    // Getters & Setters – used by Spring XML <property> injection
    //                      and by Jackson for JSON serialisation
    // ------------------------------------------------------------------

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // ------------------------------------------------------------------
    // toString – convenient for logging
    // ------------------------------------------------------------------

    @Override
    public String toString() {
        return "Country{code='" + code + "', name='" + name + "'}";
    }
}
