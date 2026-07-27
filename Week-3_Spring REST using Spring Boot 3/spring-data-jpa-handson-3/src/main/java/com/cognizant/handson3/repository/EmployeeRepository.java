package com.cognizant.handson3.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.cognizant.handson3.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
    @Query("select count(e) from Employee e")
    long countEmployees();

    @Query("select avg(e.salary) from Employee e")
    double averageSalary();

    @Query("select max(e.salary) from Employee e")
    double maxSalary();

    @Query(value = "SELECT * FROM employee e WHERE e.name = :name", nativeQuery = true)
    List<Employee> findByNameNative(@Param("name") String name);
}
