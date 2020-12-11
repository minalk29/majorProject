import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFavComponent } from './nav-fav.component';

describe('NavFavComponent', () => {
  let component: NavFavComponent;
  let fixture: ComponentFixture<NavFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
