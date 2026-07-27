package com.cognizant.ormlearn.service.exception;

public class CountryNotFoundException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public CountryNotFoundException(String code) {
        super("Country not found with code: " + code);
    }
}
