import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Short2Component } from './short2.component';

describe('Short2Component', () => {
  let component: Short2Component;
  let fixture: ComponentFixture<Short2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Short2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Short2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
