package com.wiltech.car;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 * The interface Car repository. Ths class contains CRUD methods for a repository to manage cars.
 */
@RepositoryRestController
@CrossOrigin(origins = "http://localhost:4200")
public interface CarRepository extends JpaRepository<Car, Long>{
}
