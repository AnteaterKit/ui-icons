/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UiIconComponent } from './ui-icon.component';

describe('UiIconComponent', () => {
  let component: UiIconComponent;
  let fixture: ComponentFixture<UiIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
