package com.cognizant.ormlearn;

import java.util.Arrays;
import java.util.HashSet;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.support.TransactionTemplate;

import com.cognizant.ormlearn.model.Course;
import com.cognizant.ormlearn.model.Department;
import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.model.Student;
import com.cognizant.ormlearn.repository.CourseRepository;
import com.cognizant.ormlearn.repository.DepartmentRepository;
import com.cognizant.ormlearn.repository.EmployeeRepository;
import com.cognizant.ormlearn.repository.StudentRepository;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(DepartmentRepository deptRepo, EmployeeRepository empRepo,
                                  StudentRepository studentRepo, CourseRepository courseRepo,
                                  PlatformTransactionManager txManager) {
        return args -> {
            TransactionTemplate tx = new TransactionTemplate(txManager);
            tx.execute(status -> {
                // create department and employees matching requested output
                Department dept = new Department("IT", "Information Technology");
                deptRepo.save(dept);

                Employee emp1 = new Employee("John", dept);
                Employee emp2 = new Employee("David", dept);
                Employee emp3 = new Employee("Peter", dept);
                empRepo.saveAll(Arrays.asList(emp1, emp2, emp3));

                // Many-to-Many: student and courses
                Course course1 = new Course("Java");
                Course course2 = new Course("Spring Boot");
                Course course3 = new Course("Hibernate");
                courseRepo.saveAll(Arrays.asList(course1, course2, course3));

                Student student = new Student("John");
                student.setCourses(new HashSet<>(Arrays.asList(course1, course2, course3)));
                studentRepo.save(student);

                // Print in the requested format
                System.out.println();
                System.out.println("===== ManyToOne =====");
                System.out.println("Employee Details");
                System.out.println();
                System.out.println("Id : " + emp1.getId());
                System.out.println("Name : " + emp1.getName());
                    System.out.println("Department : " + emp1.getDepartment().getName());
                System.out.println();
                System.out.println("==========================");
                System.out.println();
                System.out.println("===== OneToMany =====");
                System.out.println();
                System.out.println("Department : " + dept.getName());
                System.out.println();
                System.out.println("Employees");
                // fetch employees for this department via repository (avoids null lazy collection)
                empRepo.findAll().stream()
                        .filter(e -> e.getDepartment() != null && dept.getId().equals(e.getDepartment().getId()))
                        .forEach(e -> System.out.println(e.getName()));
                System.out.println();
                System.out.println("==========================");
                System.out.println();
                System.out.println("===== ManyToMany =====");
                System.out.println();
                System.out.println("Student : " + student.getName());
                System.out.println();
                System.out.println("Courses");
                System.out.println(course1.getTitle());
                System.out.println(course2.getTitle());
                System.out.println(course3.getTitle());
                System.out.println();

                LOGGER.info("Demo complete");
                return null;
            });
        };
    }
}
