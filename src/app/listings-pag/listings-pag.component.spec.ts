import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsPagComponent } from './listings-pag.component';

describe('ListingsPagComponent', () => {
  let component: ListingsPagComponent;
  let fixture: ComponentFixture<ListingsPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingsPagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
