import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { GatewaysService } from './gateways.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnChanges{

  title = 'gateways';
  $gateways: Observable<any>;
  gateways: any[];
  selectedGateway: any;
  selectedGatewayDevices: any[];

  constructor(private gatewaysService: GatewaysService){
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getGateways();
  }

  ngOnInit(): void {
    this.$gateways = this.gatewaysService.getGateways();
    this.selectedGateway = this.gateways[0];
    this.selectedGatewayDevices = this.gateways[0].devices;
  }

  getGateways(): void {
    this.gatewaysService.getGateways();
  }

  addGateway(formData: any): void {
    this.gatewaysService.addGateway(formData);
    this.$gateways = this.gatewaysService.getGateways();
  }

  addDevice(formData: any): void {
    this.gatewaysService.addDevice(formData, this.selectedGateway.serial);
    this.$gateways = this.gatewaysService.getGateways();
  }

  showDevices(elemento: any): void {
    this.selectedGateway = elemento;
    this.selectedGatewayDevices = elemento.devices;
  }
}
