import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListChairComponent } from './edit-list-chair.component';

describe('EditListChairComponent', () => {
  let component: EditListChairComponent;
  let fixture: ComponentFixture<EditListChairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditListChairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListChairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
