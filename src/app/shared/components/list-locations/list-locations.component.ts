import { Component, OnInit, Input } from '@angular/core';
import { LocationModel } from '../../models/location.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-locations',
  templateUrl: './list-locations.component.html',
  styleUrls: ['./list-locations.component.scss']
})
export class ListLocationsComponent implements OnInit {

  @Input()
  listLocations: LocationModel[];

  constructor( private _router:Router ) { }

  ngOnInit() {
  }


  public detail(item: LocationModel){
    debugger
    this._router.navigate([`/location/detail/${item.id}`])
  }

}
