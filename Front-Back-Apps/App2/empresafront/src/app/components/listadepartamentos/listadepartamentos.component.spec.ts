import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadepartamentosComponent } from './listadepartamentos.component';

describe('ListadepartamentosComponent', () => {
  let component: ListadepartamentosComponent;
  let fixture: ComponentFixture<ListadepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadepartamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
