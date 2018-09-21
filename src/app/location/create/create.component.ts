import { Component, OnInit } from '@angular/core';
import { LocationModel } from '../../shared/models/location.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public location: LocationModel = new LocationModel();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.location);
  }

}
