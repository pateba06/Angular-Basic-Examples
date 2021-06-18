import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTopicsComponent } from './angular-topics.component';

describe('AngularTopicsComponent', () => {
  let component: AngularTopicsComponent;
  let fixture: ComponentFixture<AngularTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
