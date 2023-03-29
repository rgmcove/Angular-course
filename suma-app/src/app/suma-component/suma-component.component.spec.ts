import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaComponentComponent } from './suma-component.component';

describe('SumaComponentComponent', () => {
  let component: SumaComponentComponent;
  let fixture: ComponentFixture<SumaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
