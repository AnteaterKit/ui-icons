import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUiIconsLibComponent } from './ng-ui-icons-lib.component';

describe('NgUiIconsLibComponent', () => {
  let component: NgUiIconsLibComponent;
  let fixture: ComponentFixture<NgUiIconsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgUiIconsLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgUiIconsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
