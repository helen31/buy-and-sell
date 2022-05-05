import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css'],
})
export class NewListingPageComponent implements OnInit {
  name: string = '';
  description: string = '';
  price: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('app-new-listing-page');
  }

  onSubmit(listing: Listing): void {
    alert('Creating a new listing...');
    this.router.navigateByUrl('/my-listings');
  }
}
