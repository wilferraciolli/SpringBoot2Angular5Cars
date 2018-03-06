import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CarListComponent } from './car-list/car-list.component';
import { CarService } from "./shared/car/car.service";
import { GiphyService } from "./shared/giphy/giphy.service";
import { CarEditComponent } from './car-edit/car-edit.component';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes} from "@angular/router";

import { OktaCallbackComponent, OktaAuthModule } from '@okta/okta-angular';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./shared/okta/auth.interceptor";
import { HomeComponent } from './home/home.component';

//router constant
const appRoutes: Routes = [
  { path: '', redirectTo: '/car-list', pathMatch: 'full' },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }
];

//okta oauth config
const config = {
  issuer: 'https://dev-181077.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oae7t9nvhnWvzFS20h7'
};

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    OktaAuthModule.initAuth(config),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CarService, GiphyService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
