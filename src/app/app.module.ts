import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSidebarMenuComponent } from './Layout/left-sidebar-menu/left-sidebar-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component'; 
import { TopNavbarComponent } from './Layout/top-navbar/top-navbar.component';
import { NotificationCardComponent } from './Layout/top-navbar/notification-card/notification-card.component';
import { FooterComponent } from './Layout/footer/footer.component'; 
import { MainLayoutComponent } from './Layout/layouts/main-layout/main-layout.component';
import { MinimalLayoutComponent } from './Layout/layouts/minimal-layout/minimal-layout.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireAuthModule} from '@angular/fire/compat/auth'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { ToastrModule } from 'ngx-toastr';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './account/verify-email/verify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarMenuComponent,
    DashboardComponent,
    OrdersComponent,
    TopNavbarComponent,
    NotificationCardComponent,
    FooterComponent, 
    MainLayoutComponent, MinimalLayoutComponent, AccountComponent, LoginComponent, RegistrationComponent, ForgotPasswordComponent, VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule, 
    FormsModule,
    ReactiveFormsModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule
    ToastrModule.forRoot(), 
    AngularFireStorageModule,
    AngularFireDatabaseModule,
     AngularFirestoreModule
  ],
  exports: [TopNavbarComponent, FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
