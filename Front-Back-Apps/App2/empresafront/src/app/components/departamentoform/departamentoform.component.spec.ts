import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoformComponent } from './departamentoform.component';

describe('DepartamentoformComponent', () => {
  let component: DepartamentoformComponent;
  let fixture: ComponentFixture<DepartamentoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
