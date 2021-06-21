import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncandawaitComponent } from './asyncandawait.component';

describe('AsyncandawaitComponent', () => {
  let component: AsyncandawaitComponent;
  let fixture: ComponentFixture<AsyncandawaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncandawaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncandawaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
