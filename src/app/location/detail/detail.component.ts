import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../../shared/services/location.service';
import { LocationModel } from '../../shared/models/location.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public location: LocationModel;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _locationService: LocationService
  ) {

   }

  ngOnInit() {
    this.showDetail();
  }


  public showDetail(){

    const ID = +this._activatedRoute.snapshot.paramMap.get('id');

    // this._locationService.getAll()
    //   .subscribe(resp => {
    //     this.location = resp.find(l => l.id == ID);
    //     console.log(this.location);
    //   })

  }


}
