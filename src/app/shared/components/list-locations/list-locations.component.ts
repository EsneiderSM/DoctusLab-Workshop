import { Component, OnInit, Input } from '@angular/core';
import { LocationModel } from '../../models/location.model';

@Component({
  selector: 'app-list-locations',
  templateUrl: './list-locations.component.html',
  styleUrls: ['./list-locations.component.scss']
})
export class ListLocationsComponent implements OnInit {

  @Input()
  listLocations: LocationModel[];

  constructor() { }

  ngOnInit() {
  }

}
