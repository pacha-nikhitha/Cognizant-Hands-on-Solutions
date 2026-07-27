package com.cognizant.handson3.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cognizant.handson3.model.Department;

public interface DepartmentRepository extends CrudRepository<Department, String> {
    // Fetch join to load employees with department (JPQL/HQL fetch)
    @Query("select d from Department d join fetch d.employees where d.id = ?1")
    Optional<Department> findByIdFetchEmployees(String id);
}
