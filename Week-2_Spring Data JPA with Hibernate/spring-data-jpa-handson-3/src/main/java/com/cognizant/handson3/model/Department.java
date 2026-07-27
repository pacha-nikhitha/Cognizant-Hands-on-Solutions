package com.cognizant.handson3.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Department {
    @Id
    private String id;
    private String name;

    @OneToMany(mappedBy = "department")
    private List<Employee> employees;

    public Department() {}

    public Department(String id, String name) { this.id = id; this.name = name; }
    public String getId() { return id; }
    public String getName() { return name; }
    public List<Employee> getEmployees() { return employees; }
}
