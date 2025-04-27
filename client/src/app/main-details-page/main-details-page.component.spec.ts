import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetailsPageComponent } from './main-details-page.component';

describe('MainDetailsPageComponent', () => {
  let component: MainDetailsPageComponent;
  let fixture: ComponentFixture<MainDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDetailsPageComponent]
    });
    fixture = TestBed.createComponent(MainDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
