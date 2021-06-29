import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatewaysService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080/';

  getGateways(): Observable<any> {
    return this.http.get(this.url + 'gateways');
  }

  addGateway(formData: FormData): void{
    const object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });
    this.http.post(this.url + 'gateways', JSON.stringify(object), {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  addDevice(formData: FormData, serial: string): void{
    formData.append('gateway', '');
    const object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });
    const fd = JSON.stringify(object);
    console.log(fd);
    this.http.post(this.url + 'devices', fd, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}
