import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComponentComponent } from './lista-component.component';

describe('ListaComponentComponent', () => {
  let component: ListaComponentComponent;
  let fixture: ComponentFixture<ListaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
