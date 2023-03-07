import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Gateway } from "./models/gateway";
import { Device } from "./models/device";

@Injectable({
  providedIn: "root",
})
export class GatewaysService {
  constructor(private http: HttpClient) {}

  private url = "http://localhost:8080/";

  getGateways(): Observable<any> {
    return this.http.get(this.url + "gateways");
  }

  addGateway(gateway:Gateway): Observable<any> {
    return this.http.post(this.url + "gateways", gateway);
  }

  addDevice(device:Device): Observable<any> {
    return this.http.post(this.url + "devices", device);
  }
}
