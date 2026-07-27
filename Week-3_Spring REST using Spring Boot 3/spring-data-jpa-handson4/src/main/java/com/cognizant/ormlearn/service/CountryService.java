package com.cognizant.ormlearn.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;
import com.cognizant.ormlearn.service.exception.CountryNotFoundException;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional(readOnly = true)
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    @Transactional
    public Country findCountryByCode(String countryCode) throws CountryNotFoundException {
        Optional<Country> result = countryRepository.findById(countryCode);
        if (!result.isPresent()) {
            throw new CountryNotFoundException(countryCode);
        }
        return result.get();
    }

    // Controller compatibility methods
    public Country getCountryByCode(String code) {
        return findCountryByCode(code);
    }

    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }

    public Country updateCountry(String code, Country country) {
        Optional<Country> existing = countryRepository.findById(code);
        if (!existing.isPresent()) {
            throw new CountryNotFoundException(code);
        }
        Country c = existing.get();
        c.setName(country.getName());
        return countryRepository.save(c);
    }

    public void deleteCountry(String code) {
        countryRepository.deleteById(code);
    }

    public List<Country> findByNameContaining(String name) {
        return countryRepository.findByNameContainingIgnoreCase(name);
    }
}
