import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EmptyNotificationComponent } from './modules/shared/empty-notification/empty-notification.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { LoginpageCarouselComponent } from './login/Carousel/loginpage-carousel/loginpage-carousel.component';
import { LoaderComponent } from './modules/shared/loader/loader.component';
import { AskmeComponent } from './modules/shared/askme/askme.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmptyNotificationComponent,
    HomeComponent,
    LoginpageCarouselComponent,
    LoaderComponent,
    AskmeComponent,

  ],
  imports: [
    MatCardModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
