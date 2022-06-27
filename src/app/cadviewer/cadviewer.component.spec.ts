import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadviewerComponent } from './cadviewer.component';

describe('CadviewerComponent', () => {
  let component: CadviewerComponent;
  let fixture: ComponentFixture<CadviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
