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
    console.log(this.form.value);
    const formData: any = new FormData();
    formData.append('uid', this.form.get('uid').value);
    formData.append('vendor', this.form.get('vendor').value);
    formData.append('created', this.form.get('created').value);
    this.formData.emit(formData);
  }

}
