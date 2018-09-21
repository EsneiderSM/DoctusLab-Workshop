import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { LocationRoutingModule } from './location-routing.module';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
      DetailComponent,
      CreateComponent
  ],
  imports: [
    LocationRoutingModule,
    FormsModule
  ],
  providers: []
})
export class LocationModule { }
