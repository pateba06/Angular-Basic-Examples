import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentinteractionComponent } from './componentinteraction.component';

describe('ComponentinteractionComponent', () => {
  let component: ComponentinteractionComponent;
  let fixture: ComponentFixture<ComponentinteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentinteractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentinteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
