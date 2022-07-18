import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Long2Component } from './long2.component';

describe('Long2Component', () => {
  let component: Long2Component;
  let fixture: ComponentFixture<Long2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Long2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Long2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
