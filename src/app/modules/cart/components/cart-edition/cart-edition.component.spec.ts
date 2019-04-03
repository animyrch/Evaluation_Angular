import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartEditionComponent } from './cart-edition.component';

describe('CartEditionComponent', () => {
  let component: CartEditionComponent;
  let fixture: ComponentFixture<CartEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
