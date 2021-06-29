import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.sass']
})
export class DeviceListComponent implements OnInit {

  @Input() devices: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
