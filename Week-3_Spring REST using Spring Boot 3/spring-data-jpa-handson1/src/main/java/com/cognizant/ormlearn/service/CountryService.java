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

    @Transactional(readOnly = true)
    public Country getCountryByCode(String code) {
        Optional<Country> opt = countryRepository.findById(code);
        return opt.orElseThrow(() -> new CountryNotFoundException(code));
    }

    @Transactional
    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }

    @Transactional
    public Country updateCountry(String code, Country updated) {
        Country existing = getCountryByCode(code);
        existing.setName(updated.getName());
        return countryRepository.save(existing);
    }

    @Transactional
    public void deleteCountry(String code) {
        Country existing = getCountryByCode(code);
        countryRepository.delete(existing);
    }

    @Transactional(readOnly = true)
    public List<Country> findByNameContaining(String partialName) {
        return countryRepository.findByNameContainingIgnoreCase(partialName);
    }
}