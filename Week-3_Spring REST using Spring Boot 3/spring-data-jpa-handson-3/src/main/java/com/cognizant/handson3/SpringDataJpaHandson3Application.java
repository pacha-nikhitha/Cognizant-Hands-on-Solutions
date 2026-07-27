package com.cognizant.handson3;

import javax.persistence.EntityManager;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.transaction.support.TransactionTemplate;

@SpringBootApplication
public class SpringDataJpaHandson3Application {
    public static void main(String[] args) {
        SpringApplication.run(SpringDataJpaHandson3Application.class, args);
    }

    @Bean
    CommandLineRunner demo(MyDataLoader loader, TransactionTemplate tx, EntityManager em) {
        return args -> tx.execute(status -> {
            loader.loadSampleData();

            // HQL / JPQL using EntityManager
            System.out.println("\n--- EntityManager JPQL (select names) ---");
            em.createQuery("select e.name from Employee e", String.class)
                    .getResultList().forEach(System.out::println);

            // Repository @Query (JPQL/HQL)
            System.out.println("\n--- Repository @Query JPQL (count) ---");
            System.out.println("Employee count: " + loader.getEmployeeRepository().countEmployees());

            // Fetch join (JPQL/HQL)
            System.out.println("\n--- Fetch join using @Query (JPQL) ---");
            loader.getDepartmentRepository().findByIdFetchEmployees("IT").ifPresent(d -> {
                System.out.println("Dept: " + d.getName());
                if (d.getEmployees() != null) {
                    d.getEmployees().forEach(e -> System.out.println(e.getName()));
                } else {
                    System.out.println("(no employees loaded)");
                }
            });

            // Native query
            System.out.println("\n--- Native query ---");
            loader.getEmployeeRepository().findByNameNative("John").forEach(e -> System.out.println(e.getName()));

            // Aggregate function example using @Query
            System.out.println("\n--- Aggregate (AVG/COUNT/ MAX) ---");
            System.out.println("Employee Count : " + loader.getEmployeeRepository().countEmployees());
            System.out.println("Average Salary : " + loader.getEmployeeRepository().averageSalary());
            System.out.println("Maximum Salary : " + loader.getEmployeeRepository().maxSalary());

            return null;
        });
    }
}
