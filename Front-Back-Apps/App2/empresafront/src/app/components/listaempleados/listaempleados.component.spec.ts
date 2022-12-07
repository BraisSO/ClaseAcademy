import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaempleadosComponent } from './listaempleados.component';

describe('ListaempleadosComponent', () => {
  let component: ListaempleadosComponent;
  let fixture: ComponentFixture<ListaempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaempleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
