Spring Data JPA Hands-on 1

Build and run (Windows):

1. Ensure MySQL server is running and schema `ormlearn` exists with `country` table populated:

   create schema ormlearn;
   use ormlearn;
   create table country(co_code varchar(2) primary key, co_name varchar(50));
   insert into country values ('IN','India');
   insert into country values ('US','United States of America');

2. Build with Maven (add proxy flags if required):

```powershell
mvn clean package -Dhttp.proxyHost=proxy.cognizant.com -Dhttp.proxyPort=6050 -Dhttps.proxyHost=proxy.cognizant.com -Dhttps.proxyPort=6050 -Dhttp.proxyUser=123456
```

3. Run the application:

```powershell
java -jar target/orm-learn-0.0.1-SNAPSHOT.jar
```

Expected console output (truncated around relevant logs):

Inside main

Start

Hibernate:
select
    country0_.co_code as co_code1_0_,
    country0_.co_name as co_name2_0_
from
    country country0_

Countries :
[Country [code=IN, name=India], Country [code=US, name=United States of America]]

End
