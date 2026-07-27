package com.cognizant.ormlearn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static CountryRepository countryRepository;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        countryRepository = context.getBean(CountryRepository.class);
        testSearchContains();
        testSearchContainsSorted();
        testSearchByAlphabet();
    }

    private static void testSearchContains() {
        LOGGER.info("testSearchContains");
        List<Country> list = countryRepository.findByNameContainingIgnoreCase("ou");
        System.out.println("\nSearch contains 'ou':\n" + list + "\n");
    }

    private static void testSearchContainsSorted() {
        LOGGER.info("testSearchContainsSorted");
        List<Country> list = countryRepository.findByNameContainingIgnoreCaseOrderByNameAsc("ou");
        System.out.println("\nSearch contains 'ou' sorted asc by name:\n" + list + "\n");
    }

    private static void testSearchByAlphabet() {
        LOGGER.info("testSearchByAlphabet");
        List<Country> list = countryRepository.findByNameStartingWithIgnoreCase("Z");
        System.out.println("\nSearch starting with 'Z':\n" + list + "\n");
    }
}
