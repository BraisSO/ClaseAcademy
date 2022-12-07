import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormempleadoComponent } from './formempleado.component';

describe('FormempleadoComponent', () => {
  let component: FormempleadoComponent;
  let fixture: ComponentFixture<FormempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormempleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
