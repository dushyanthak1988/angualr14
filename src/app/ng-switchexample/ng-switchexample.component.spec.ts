import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchexampleComponent } from './ng-switchexample.component';

describe('NgSwitchexampleComponent', () => {
  let component: NgSwitchexampleComponent;
  let fixture: ComponentFixture<NgSwitchexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwitchexampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwitchexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
