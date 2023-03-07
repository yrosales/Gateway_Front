import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.sass']
})
export class DeviceEditComponent implements OnInit {

  form: FormGroup;

  @Output() formData = new EventEmitter<any>();

  constructor( public fb: FormBuilder){
    this.form = this.fb.group({
      uid: [''],
      vendor: [''],
      created: [''],
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.formData.emit(this.form.value);
  }

}
