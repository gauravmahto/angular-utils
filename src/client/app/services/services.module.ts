import { NgModule } from '@angular/core';

import { DataService } from './data/data.service';
import { HomeService } from './home.service';

@NgModule({
  providers: [
    DataService, HomeService
  ]
})
export class ServicesModule {
}