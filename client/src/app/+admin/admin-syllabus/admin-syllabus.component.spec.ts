import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSyllabusComponent } from './admin-syllabus.component';

describe('AdminSyllabusComponent', () => {
  let component: AdminSyllabusComponent;
  let fixture: ComponentFixture<AdminSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
