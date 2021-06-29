import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GatewaysService } from '../gateways.service';

@Component({
  selector: 'app-gateway-edit',
  templateUrl: './gateway-edit.component.html',
  styleUrls: ['./gateway-edit.component.sass']
})
export class GatewayEditComponent implements OnInit {

  form: FormGroup;

  @Output() formData = new EventEmitter<any>();

  constructor(private gatewaysService: GatewaysService, public fb: FormBuilder){
    this.form = this.fb.group({
      serial: [''],
      name: [''],
      address: [''],
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    console.log(this.form.value);
    const formData: any = new FormData();
    formData.append('serial', this.form.get('serial').value);
    formData.append('name', this.form.get('name').value);
    formData.append('address', this.form.get('address').value);
    this.formData.emit(formData);
  }

}
