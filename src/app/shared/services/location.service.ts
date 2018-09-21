import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LocationModel } from "../models/location.model";
import { map, filter, flatMap } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Observable } from "rxjs";


@Injectable()
export class LocationService{

    locationList: AngularFireList<LocationModel>;

    constructor(
        private _firebase: AngularFireDatabase
    ){}

    public getAll(): Observable<Array<LocationModel>>{
        return this._firebase.list('/customers').valueChanges()
            .pipe(map(resp => {
                return resp as Array<LocationModel>
            }));
    }

    public insertLocation(item: LocationModel){
        return this._firebase.list('/customers').push(item);
    }

}