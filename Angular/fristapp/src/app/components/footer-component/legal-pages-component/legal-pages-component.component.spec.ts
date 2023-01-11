import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalPagesComponentComponent } from './legal-pages-component.component';

describe('LegalPagesComponentComponent', () => {
  let component: LegalPagesComponentComponent;
  let fixture: ComponentFixture<LegalPagesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalPagesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalPagesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
