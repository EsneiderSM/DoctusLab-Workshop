import { Component, OnInit } from '@angular/core';
import { LocationModel } from '../../shared/models/location.model';
import { LocationService } from '../../shared/services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public location: LocationModel = new LocationModel();

  constructor(
    private _locationService: LocationService,
    private _roter: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this._locationService.insertLocation(this.location);
    this._roter.navigate(['/']);

  }

}
