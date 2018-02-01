package com.wiltech.car;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * The type Car. Entity bean to map a car to the database. This class uses Lombok to automate common methods.
 */
@Entity
@Getter @Setter
@NoArgsConstructor
@EqualsAndHashCode @ToString
public class Car {

    @Id
    @GeneratedValue
    private Long id;

    private @NonNull String name;
}
