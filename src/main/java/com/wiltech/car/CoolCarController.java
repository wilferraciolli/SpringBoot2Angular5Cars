package com.wiltech.car;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

/**
 * The type Cool car controller. Rest Controller to display a list of cool cars.
 */
@RestController
public class CoolCarController {

    private CarRepository repository;

    /**
     * Instantiates a new Cool car controller.
     *
     * @param repository the repository
     */
    public CoolCarController(CarRepository repository) {
        this.repository = repository;
    }

    /**
     * Cool cars collection endpoint.
     *
     * @return the collection of cools cars.
     */
    @GetMapping("/cool-cars")
    public Collection<Car> coolCars() {
        //get all the cas from the db, filter by isColl
        return repository.findAll().stream()
                .filter(this::isCool)
                .collect(Collectors.toList());
    }

  //Method to define what cras should be col.
    private boolean isCool(Car car) {
        return !car.getName().equals("AMC Gremlin") &&
                !car.getName().equals("Triumph Stag") &&
                !car.getName().equals("Ford Pinto") &&
                !car.getName().equals("Yugo GV");
    }
}
