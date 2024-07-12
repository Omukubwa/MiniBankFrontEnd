import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullstatementComponent } from './fullstatement.component';

describe('FullstatementComponent', () => {
  let component: FullstatementComponent;
  let fixture: ComponentFixture<FullstatementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullstatementComponent]
    });
    fixture = TestBed.createComponent(FullstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
