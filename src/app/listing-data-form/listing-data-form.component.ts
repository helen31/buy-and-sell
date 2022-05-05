import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css'],
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText?: string; // make component require this input
  @Input() currentName: string = '';
  @Input() currentDescription: string = '';
  @Input() currentPrice: string = '';

  name: string = '';
  description: string = '';
  price: string = '';

  @Output() submitListing = new EventEmitter<Listing>();

  constructor() {}

  ngOnInit(): void {
    console.log('app-new-listing-page');
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onButtonClicked(): void {
    this.submitListing.emit({
      id: null,
      name: this.name,
      description: this.description,
      price: Number(this.price),
    });
  }
}
