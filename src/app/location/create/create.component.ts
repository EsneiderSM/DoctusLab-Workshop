import { Component, OnInit } from '@angular/core';
import { LocationModel } from '../../shared/models/location.model';
import { LocationService } from '../../shared/services/location.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public location: LocationModel = new LocationModel();

  constructor(
    private _locationService: LocationService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this._locationService.insertLocation(this.location);
  }

}
