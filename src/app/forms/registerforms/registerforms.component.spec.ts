import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterformsComponent } from './registerforms.component';

describe('RegisterformsComponent', () => {
  let component: RegisterformsComponent;
  let fixture: ComponentFixture<RegisterformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
