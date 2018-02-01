package com.wiltech;

import com.wiltech.car.Car;
import com.wiltech.car.CarRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

/**
 * The type Demo application.
 */
@SpringBootApplication
public class DemoApplication {

	/**
	 * The entry point of application.
	 *
	 * @param args the input arguments
	 */
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	/**
	 * Adding  ApplicationRunner bean to the Application Boot to run set up data on the database.
	 *
	 * @param repository the repository
	 * @return application runner
	 */
	@Bean
	ApplicationRunner init(CarRepository repository) {
		//Populate a list of cars on the database
		return args -> {
			Stream.of("Ferrari", "Jaguar", "Porsche", "Lamborghini", "Bugatti",
					"AMC Gremlin", "Triumph Stag", "Ford Pinto", "Yugo GV").forEach(name -> {
				Car car = new Car();
				car.setName(name);
				repository.save(car);
			});

			//Print every car on the database
			repository.findAll().forEach(System.out::println);
		};
	}
}
