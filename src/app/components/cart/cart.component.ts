import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 =
  items:any;
  quantity:number=1;
  subtotal:number;
  totalitems:number;
  total:number;
  user: any;
  name: any;

  constructor(private _authService: AuthService,
    private router: Router) { }

  ngOnInit() {
   this.user=JSON.parse(localStorage.getItem("user"));
  var id= this.user._id;
  //console.log(id);
  
    this._authService.getItemsForUser(id).subscribe((data) => {

      let datas = data;
      this.items = datas.data[0];
     this.items = Array.of(this.items); 

    });

    //this.items =this._authService.getOrderForUser();
    if(this.items==null){
      this.subtotal=0;
      this.total=0;
      this.totalitems=0;
    }
    else{
    this.totalitems=this.items.length;
     this.subtotal=this.totalitems * 350;
     this.total=this.subtotal + 6.94;
    }
  }

  
//from demo jewelery mean app


 /*  removeProduct(i){
    if (i > -1) {
      this.items.splice(i, 1);
    }
    this.totalitems = this.items.length;
    this.subtotal = this.totalitems * 350;
    this.total = this.subtotal + 6.94;
    this.authService.updateItemsInOrder(this.items);
    this.router.navigate(['/cart']);
  }
 
  itemslenth(){
    if(this.items.length ==null|| this.items.length == 0){
      return false; 
    }
    else
    return true;
  }
  checkout(){
    if (this.items.length == null || this.items.length == 0){
     
      this.flashMessage.show('Please add some items to Cart', { cssClass: 'alert-danger', timeout: 3000 });
    }
    else{
      
      this.authService.storeTotal(this.total);
       this.router.navigate(['/checkout']);
    }

  } */


}
