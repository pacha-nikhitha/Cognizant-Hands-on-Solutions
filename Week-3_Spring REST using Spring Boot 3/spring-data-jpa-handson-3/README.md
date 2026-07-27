Spring Data JPA Hands-on 3 - HQL / JPQL / Native Query demo

This small demo shows:
- JPQL/HQL using `EntityManager.createQuery`
- `@Query` annotated repository methods (JPQL/HQL and native)
- `fetch` join in JPQL/HQL
- aggregate function example

Run with:

```powershell
cd "<repo>/spring-data-jpa-handson-3"
mvn clean package -DskipTests
java -jar target\spring-data-jpa-handson-3-0.0.1-SNAPSHOT.jar
```

References:
- https://docs.jboss.org/hibernate/orm/4.3/devguide/en-US/html/ch11.html
- https://www.baeldung.com/spring-data-jpa-query
