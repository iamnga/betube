import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairControlComponent } from './chair-control.component';

describe('ChairControlComponent', () => {
  let component: ChairControlComponent;
  let fixture: ComponentFixture<ChairControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChairControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChairControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
