package com.cognizant.ormlearn.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.ormlearn.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {
    // 1) Search by fragment (contains, case-insensitive)
    List<Country> findByNameContainingIgnoreCase(String fragment);

    // 2) Search by fragment and return ascending by name
    List<Country> findByNameContainingIgnoreCaseOrderByNameAsc(String fragment);

    // 3) Find countries starting with an alphabet (case-insensitive)
    List<Country> findByNameStartingWithIgnoreCase(String prefix);
}
