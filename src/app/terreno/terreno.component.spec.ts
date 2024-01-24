import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrenoComponent } from './terreno.component';

describe('TerrenoComponent', () => {
  let component: TerrenoComponent;
  let fixture: ComponentFixture<TerrenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TerrenoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
