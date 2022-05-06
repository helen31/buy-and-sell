import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-pag.component.html',
  styleUrls: ['./listings-pag.component.css'],
})
export class ListingsPagComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    this.listingsService
      .getListings()
      .subscribe((listings) => (this.listings = listings));
  }
}
