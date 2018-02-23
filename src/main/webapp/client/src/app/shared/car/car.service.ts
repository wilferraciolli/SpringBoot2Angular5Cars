import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }

  /**
   * Get all cool cars.
   * @returns {Observable<any>}
   */
  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/cool-cars');
  }

}
