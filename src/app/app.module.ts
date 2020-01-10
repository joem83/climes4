import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'; 
import {FormsModule} from '@angular/forms';
import { TokenStorage } from './token.storage';
import { AppComponent } from './app.component';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { AuthService } from './auth.service';
import { NavComponent } from './components/nav/nav.component';
//import { AdditemComponent } from './components/add-item/add-item.component';
import { LoginComponent } from './login/login.component';
import { SerMes4Service } from './services/ser-mes4.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './components/cart/cart.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RegisterComponent } from './register/register.component';
//import { MAdditemComponent } from './components/modal-add/modal-add.component';


const routes: Routes = [
    { path: 'items', component: AllItemsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: RegisterComponent },
    { path: '', component: LoginComponent },
   /*  { path: 'items/add', component: AdditemComponent } */
];


@NgModule({
    declarations: [
        AppComponent,
        AllItemsComponent,
        CartComponent,
        NavComponent,
        LoginComponent,
        RegisterComponent,
        /* AdditemComponent,
        MAdditemComponent */
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        HttpModule,
        FormsModule,
        NgbModule,
        FlashMessagesModule.forRoot()
    ],
    providers: [SerMes4Service, AuthService, TokenStorage],
    bootstrap: [AppComponent]
})
export class AppModule { }
