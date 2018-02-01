package com.wiltech.car;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;

/**
 * The interface Car repository. Ths class contains CRUD methods for a repository to manage cars.
 */
@RepositoryRestController
public interface CarRepository extends JpaRepository<Car, Long>{
}
