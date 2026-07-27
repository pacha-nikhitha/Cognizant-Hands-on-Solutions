package com.cognizant.handson3;

import org.springframework.stereotype.Component;

import com.cognizant.handson3.model.Department;
import com.cognizant.handson3.model.Employee;
import com.cognizant.handson3.repository.DepartmentRepository;
import com.cognizant.handson3.repository.EmployeeRepository;

@Component
public class MyDataLoader {
    private final DepartmentRepository departmentRepository;
    private final EmployeeRepository employeeRepository;

    public MyDataLoader(DepartmentRepository dr, EmployeeRepository er) {
        this.departmentRepository = dr;
        this.employeeRepository = er;
    }

    public void loadSampleData() {
        Department it = new Department("IT", "Information Technology");
        Department hr = new Department("HR", "Human Resources");
        departmentRepository.save(it);
        departmentRepository.save(hr);

        employeeRepository.save(new Employee("John", 50000.0, it));
        employeeRepository.save(new Employee("David", 55000.0, it));
        employeeRepository.save(new Employee("Peter", 70000.0, it));
        employeeRepository.save(new Employee("Alice", 45000.0, hr));
    }

    public EmployeeRepository getEmployeeRepository() { return employeeRepository; }
    public DepartmentRepository getDepartmentRepository() { return departmentRepository; }
}
