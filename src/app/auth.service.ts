import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from "@angular/http";
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  user: any;
  authToken: any;
  subject = new Subject();
  data: any;
  constructor(private _router: Router, 
    private _http: HttpClient,  
    private flashMessage: FlashMessagesService) { }

  login(user: { email: any; password: any; }) { 
   // console.log(user);
    
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:3000/users/login', user, {headers: headers})
      .map(res => {
       // console.log(res);
        if (res){
          localStorage.setItem('user', JSON.stringify(res));
        this._router.navigate(['/items']);
        }else{
          alert("Wrong email or password");
          this._router.navigate(['/login']);
        }
        
      } );
   /*    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    
    this._http.post('http://localhost:3000/users/login',this.data, httpOptions).subscribe( res =>{
      console.log("hi");
      console.log(res);
      
      if(res) {
        console.log("hi");
        this.storeUserData( user);
        this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 5000});
        this._router.navigate(['/']);
      } else {
        console.log("hi");
        //this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        this._router.navigate(['/login']);
      } 
  }); */
  
  } 

  storeUserData(user: any) {
    console.log("storage");
    
   // localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
   // this.authToken = token;
    this.user = user;
  }

  register(user: { fn: any; ln: any; email: any; address: any; password: any; role: string; }) {
let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  console.log(user);
  
    return this._http.post('http://localhost:3000/users/register', user, {headers: headers}).map((data : any) => {
    this.data= data; 
    console.log(this.data);

       // observer.next({user: data.user});
       // this.setUser(data.user);
        //this.token.saveToken(data.token);
       // observer.complete();
      })
  }
  
  storeItemToOrder(item: any) {

    var tempItem = JSON.parse(localStorage.getItem("items"));
    if (tempItem == null) tempItem = [];
    localStorage.setItem("item", JSON.stringify(item));
    tempItem.push(item);
    localStorage.setItem("items", JSON.stringify(tempItem));

  }
  
  getItemsForUser(id) {
    let headers = new HttpHeaders();

    headers.append('Content-Type', 'application/json');
    
    return this._http.get(`http://localhost:3000/cartItems/${id}`, { headers: headers })
  }

  logout() {
    this.user=localStorage.getItem("user")
    console.log(this.user);
    localStorage.clear();
    console.log(this.user);
    this._router.navigate(['/login']);
  }

  isLoggedIn() {
    this.user=localStorage.getItem("user");
    if (this.user != null) {
      return 1;
    } else {
      return this.user;
    }
  }

 
  isLoggedInObs(): Observable<any> {
    return new Observable((observer) => {
      if (this.user) {
        observer.next(1);
        setTimeout(() => {
          observer.next(1);
        }, 3000 );
        setTimeout(() => {
          observer.next(0);
        }, 4000 );
        setTimeout(() => {
          observer.next(1);
        }, 5000 );
      } else {
        observer.next(0);
      }
    });
  }
}
