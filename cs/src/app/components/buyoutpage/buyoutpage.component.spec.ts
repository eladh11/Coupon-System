import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyoutpageComponent } from './buyoutpage.component';

describe('BuyoutpageComponent', () => {
  let component: BuyoutpageComponent;
  let fixture: ComponentFixture<BuyoutpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyoutpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyoutpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
