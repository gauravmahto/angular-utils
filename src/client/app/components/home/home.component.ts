/**
 * Copyright 2017 - Author gauravm.git@gmail.com
 */

import { Component } from '@angular/core';

import { DataService, HomeService } from 'App/services';

@Component({
  selector: 'my-home',
  styleUrls: [
    './home.component.style.scss'
  ],
  templateUrl: './home.component.view.html'
})
export class HomeComponent {

  public highlightColor: string;
  public data: any;

  constructor(private dataService: DataService, private homeService: HomeService) {

    this.highlightColor = this.homeService.highlightColor;

  }

  public fetchData(): void {

    this.dataService.getData()
      .subscribe((data) => this.data = data.message);

  }

}
