import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorTabComponent } from './professor-tab.component';

describe('ProfessorTabComponent', () => {
  let component: ProfessorTabComponent;
  let fixture: ComponentFixture<ProfessorTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessorTabComponent]
    });
    fixture = TestBed.createComponent(ProfessorTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
