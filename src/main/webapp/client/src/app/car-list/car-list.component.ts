import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarService} from "../shared/car/car.service";
import {GiphyService} from "../shared/giphy/giphy.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit, OnDestroy {

  cars: Array<any>;
  subscription: Subscription;

  constructor(private carService: CarService, private giphyService: GiphyService) {
  }

  /**
   * On init method. call get al cars and assign to the cars local var.
   */
  ngOnInit() {
    this.subscription = this.carService.getAll().subscribe(data => {
      this.cars = data;

      //add a gif to each and every car
      for (const car of this.cars) {
        this.giphyService.get(car.name)
          .subscribe(url => car.giphyUrl = url);
      }
    })
  }

  /**
   * Tear down
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
