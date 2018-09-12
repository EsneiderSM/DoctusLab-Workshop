import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LocationModel } from "../models/location.model";


@Injectable()
export class LocationService{

    constructor(
        private _httpCLient:HttpClient
    ){}

    public getAll(){
        return this._httpCLient.get<Array<LocationModel>>('/assets/data/locations.json');
    }

}