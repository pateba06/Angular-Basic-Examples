import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableandobserversComponent } from './observableandobservers.component';

describe('ObservableandobserversComponent', () => {
  let component: ObservableandobserversComponent;
  let fixture: ComponentFixture<ObservableandobserversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableandobserversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableandobserversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
