import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css'],
})
export class EditListingPageComponent implements OnInit {
  listing?: Listing;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listingService: ListingsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingService
      .getListingById(id!)
      .subscribe((listing) => (this.listing = listing));
  }

  onSubmit({
    name,
    description,
    price,
  }: {
    name: string;
    description: string;
    price: number;
  }): void {
    this.listingService
      .editListings(this.listing?.id!, name, description, price)
      .subscribe(() => this.router.navigateByUrl('/my-listings'));
  }
}
