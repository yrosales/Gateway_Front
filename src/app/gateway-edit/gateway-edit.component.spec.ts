import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayEditComponent } from './gateway-edit.component';

describe('GatewayEditComponent', () => {
  let component: GatewayEditComponent;
  let fixture: ComponentFixture<GatewayEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
