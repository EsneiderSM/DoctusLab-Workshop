import { Component, OnInit } from '@angular/core';
import { LocationService } from '../shared/services/location.service';
import { LocationModel } from '../shared/models/location.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public listLocations: LocationModel[];

  constructor(
    private _locationService: LocationService
  ) { }

  ngOnInit() {

    this.getAllLocations();
    
  }

  public getAllLocations(){
    this._locationService.getAll()
      .subscribe(resp => {
        this.listLocations = resp;
      })
  }

}
