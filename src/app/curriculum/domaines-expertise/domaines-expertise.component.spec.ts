import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainesExpertiseComponent } from './domaines-expertise.component';

describe('DomainesExpertiseComponent', () => {
  let component: DomainesExpertiseComponent;
  let fixture: ComponentFixture<DomainesExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainesExpertiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainesExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
