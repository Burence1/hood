import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHoodComponent } from './update-hood.component';

describe('UpdateHoodComponent', () => {
  let component: UpdateHoodComponent;
  let fixture: ComponentFixture<UpdateHoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
