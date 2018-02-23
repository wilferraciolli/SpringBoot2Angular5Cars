import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarService {

  public API = '//localhost:8080';
  public CAR_API = this.API + '/cars';

  /**
   * Explicit constructor.
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) { }

  /**
   * Get all cool cars.
   * @returns {Observable<any>}
   */
  getAll(): Observable<any> {
    return this.http.get(this.API + '/cool-cars');
  }

  /**
   * Get by id.
   * @param {string} id
   * @returns {Observable<Object>}
   */
  get(id: string) {
    return this.http.get(this.CAR_API + '/' + id);
  }

  /**
   * Create or update car.
   * @param car
   * @returns {Observable<any>}
   */
  save(car: any): Observable<any> {
    let result: Observable<Object>;

    if (car['href']) {
      //update
      result = this.http.put(car.href, car);
    } else {
      //create
      result = this.http.post(this.CAR_API, car);
    }
    return result;
  }

  /**
   * Delete car.
   * @param {string} href
   * @returns {Observable<Object>}
   */
  remove(href: string) {
    return this.http.delete(href);
  }
}
