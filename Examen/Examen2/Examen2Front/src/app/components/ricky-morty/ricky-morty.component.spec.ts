import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickyMortyComponent } from './ricky-morty.component';

describe('RickyMortyComponent', () => {
  let component: RickyMortyComponent;
  let fixture: ComponentFixture<RickyMortyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickyMortyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickyMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
