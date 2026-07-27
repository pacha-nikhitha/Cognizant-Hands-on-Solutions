package com.cognizant.ormlearn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        LOGGER.info("Inside main");
        countryService = context.getBean(CountryService.class);
        getAllCountriesTest();
        findCountryByCodeTest();
        testAddCountry();
    }

    private static void getAllCountriesTest() {
        LOGGER.info("Start");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("countries={}", countries);
        System.out.println("\nCountries :\n" + countries + "\n");
        LOGGER.info("End");
    }

    private static void findCountryByCodeTest() {
        LOGGER.info("Start");
        Country country = countryService.findCountryByCode("IN");
        LOGGER.debug("Country:{}", country);
        System.out.println("\nCountry :\n" + country + "\n");
        LOGGER.info("End");
    }

    private static void testAddCountry() {
        LOGGER.info("Start add test");
        Country c = new Country("JP", "Japan");
        countryService.addCountry(c);
        Country fetched = countryService.findCountryByCode("JP");
        System.out.println("\nAdded Country :\n" + fetched + "\n");
        LOGGER.info("End add test");
    }
}
