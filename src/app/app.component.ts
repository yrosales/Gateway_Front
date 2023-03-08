import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { GatewaysService } from "./gateways.service";
import { Device } from "./models/device";
import { Gateway } from "./models/gateway";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent implements OnInit {
  title = "gateways";
  $gateways: Observable<any>;
  gateways: Gateway[];
  selectedGateway: Gateway;
  selectedGatewayDevices: Device[];

  constructor(
    private gatewaysService: GatewaysService,
    private detect: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.gatewaysService.getGateways().subscribe((resp) => {
      this.gateways = resp;
      this.selectedGateway = this.gateways[0];
      this.selectedGatewayDevices = this.gateways[0].devices;
    });
  }

  private getGateways() {
    this.gatewaysService.getGateways().subscribe((resp) => {
      this.gateways = resp;
      this.selectedGatewayDevices = this.gateways.find(
        (item) => item.serial == this.selectedGateway.serial
      ).devices;
      this.detect.detectChanges;
    },
    (error) => console.log(error));
  }

  addGateway(gateway: Gateway): void {
    this.gatewaysService.addGateway(gateway).subscribe(
      (response) => {
        console.log(response);
        this.getGateways();
      },
      (error) => console.log('error')
    );
  }

  addDevice(device: Device): void {
    const gateway: Gateway = {
      serial: this.selectedGateway.serial,
      name: this.selectedGateway.name,
      address: this.selectedGateway.address,
    };
    const newDevice: Device = {
      uid: device.uid,
      vendor: device.vendor,
      created: device.created,
      gateway: gateway,
    };

    this.gatewaysService.addDevice(newDevice).subscribe(
      (response) => {
        console.log(response);
        this.getGateways();
      },
      (error) => console.log(error)
    );
  }

  showDevices(elemento: Gateway): void {
    this.selectedGateway = elemento;
    this.selectedGatewayDevices = elemento.devices;
  }
}
