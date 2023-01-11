import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesSocialesComponentComponent } from './redes-sociales-component.component';

describe('RedesSocialesComponentComponent', () => {
  let component: RedesSocialesComponentComponent;
  let fixture: ComponentFixture<RedesSocialesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesSocialesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesSocialesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
