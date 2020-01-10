import { Component, OnInit } from '@angular/core';
import { SerMes4Service } from '../../services/ser-mes4.service'

@Component({
    selector: 'app-all-items',
    templateUrl: './all-items.component.html',
    styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {
    allitem: any = [];
    allitems: any = [];
    constructor(private _apiService: SerMes4Service) { }

    ngOnInit() {
        this._apiService.getAllItems().subscribe((data) => {
            
            
            this.allitem = data;
            this.allitems = this.allitem.data;
        });

    }

}
