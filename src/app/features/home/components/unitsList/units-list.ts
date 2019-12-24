import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-units-list',
  templateUrl: './units-list.html',
  styleUrls: ['./units-list.scss'],
})
export class UnitListComponent implements OnInit {
  data: any;

  constructor() {}

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        'heading': 'Normal text',
        'para1': 'Lorem ipsum dolor sit amet, consectetur',
        'para2': 'adipiscing elit.'
      };
    }, 5000);
  }

  ngOnInit() {

  }

}
