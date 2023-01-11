import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaformComponent } from './agendaform.component';

describe('AgendaformComponent', () => {
  let component: AgendaformComponent;
  let fixture: ComponentFixture<AgendaformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
