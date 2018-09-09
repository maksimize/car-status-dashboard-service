import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarWedgitComponent } from './car-wedgit.component';

describe('CarWedgitComponent', () => {
  let component: CarWedgitComponent;
  let fixture: ComponentFixture<CarWedgitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarWedgitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarWedgitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
