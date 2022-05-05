import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-listings-pag',
  templateUrl: './listings-pag.component.html',
  styleUrls: ['./listings-pag.component.css'],
})
export class ListingsPagComponent implements OnInit {
  listings: Listing[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listings = fakeListings;
  }
}
