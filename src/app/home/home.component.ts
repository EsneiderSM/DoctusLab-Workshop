import { Component, OnInit } from '@angular/core';
import { LocationService } from '../shared/services/location.service';
import { LocationModel } from '../shared/models/location.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public listLocations: any;
  public allLocation: any;
  public values: string = '';
  
  constructor(
    private _locationService: LocationService
  ) { }

  ngOnInit() {

    this.getAllLocations();
    
  }

  public getAllLocations(){
    this._locationService.getAll()
      .subscribe(resp => {
        debugger
        this.allLocation = resp;
        this.listLocations = resp;
      })
  }

  onKey(event: any) { 
    this.values = event.target.value;
    this.listLocations = this.allLocation.filter(l => l.name.toUpperCase().includes(this.values.toUpperCase())); 
  }

}
