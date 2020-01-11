import { Component, OnInit } from '@angular/core';
import { SerMes4Service } from '../../services/ser-mes4.service';
import { AuthService } from '../../auth.service';
import { Router } from "@angular/router";

@Component({
    selector: 'app-all-items',
    templateUrl: './all-items.component.html',
    styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {
    allitem: any = [];
    allitems: any = [];
    constructor(
        private _apiService: SerMes4Service,
        private _authService: AuthService,
        private router: Router) { }

    ngOnInit() {
        this._apiService.getAllItems().subscribe((data) => {
            
            
            this.allitem = data;
            this.allitems = this.allitem.data;
        });

    }

    onAddProductToCart(product){
        console.log(product);
        
        const item = {
          name: product.name,
          product_id: product._id,
          img: product.imagepath,
          price: product.price,
          added: true,
          quantity:1
        }
        this._authService.storeItemToOrder(item);
        
       
      }

      
}
