import { NgModule } from '@angular/core';

import { LocationRoutingModule } from './location-routing.module';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
      DetailComponent,
      CreateComponent
  ],
  imports: [
    LocationRoutingModule
  ],
  providers: []
})
export class LocationModule { }
