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
    this.formData.emit(this.form.value);
  }

}
