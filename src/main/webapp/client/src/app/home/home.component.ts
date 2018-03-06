import { Component, OnInit } from '@angular/core';
import {OktaAuthService} from "@okta/okta-angular";

/**
 * Home component to welcome onto applciation.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * Default constructor e to inject dependencies.
   * @param {OktaAuthService} oktaAuth
   */
  constructor(private oktaAuth: OktaAuthService) { }

  ngOnInit() {
  }

}
