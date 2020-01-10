import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SerMes4Service {
   /*  getAllitems() {
        throw new Error("Method not implemented.");
    } */

    constructor(private _httpClient: HttpClient) { }

    public getAllItems() {
        return this._httpClient.get(`http://localhost:3000/items`);
    }
    /* public postNewTask(data) {
        return this._httpClient.post(`http://localhost:3000/api/items/add`, {description: data.description, date: data.date, familyMember: data.familyMember});
    } */

}