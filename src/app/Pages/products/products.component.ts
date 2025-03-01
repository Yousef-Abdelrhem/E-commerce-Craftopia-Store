import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styles: ``
})
export class ProductsComponent {
  cardsNumber: number = 4;
  cardsOrder = 'Alphabetically, Z-A';
  displayP='hidden'; 
  displaySort= 'hidden';

  heart = 'images/trending/heart.svg';
  
  cards = [
    {
      title: 'Generic',
      price: '$350',
      description: 'Straw Woven Tote Bag, Handmade Large Straw Tote Bag, Perfect for Shopping and Holidays. Made with eco-friendly materials, durable and stylish. Ideal for beach days, picnics, and casual outings. Lightweight and spacious to carry all essentials.',
      image: 'images/trending/1.svg',
      loved: false
    },
    {
      title: 'Pure Chakra',
      price: '$250',
      description: 'Cotton Macrame Purse Bag, Hand-Woven Knitted Crossbody with intricate patterns. Soft and durable cotton fabric with a boho-chic vibe. Versatile for casual and festival wear. Comes with a secure zipper and adjustable strap for comfort.',
      image: 'images/trending/2.svg',
      loved: true
    },
    {
      title: 'Preppy Bracelet',
      price: '$360',
      description: 'Crossbody Bag Purse, Handmade Hobo Bag Satchel designed for modern women. Sleek design with multiple compartments for organized storage. Crafted from high-quality materials with an adjustable strap for comfort and style.',
      image: 'images/trending/3.svg',
      loved: true
    },
    {
      title: 'Summer Tote',
      price: '$300',
      description: 'Handmade Summer Tote Bag, Woven Straw with colorful patterns. Spacious and lightweight, perfect for beach vacations, picnics, and casual outings. Durable handles for easy carrying and secure closure to protect belongings.',
      image: 'images/trending/4.svg',
      loved: false
    },
    {
      title: 'Boho Bag',
      price: '$275',
      description: 'Boho Chic Straw Bag, Handmade with intricate knitting patterns. Stylish and functional with a relaxed bohemian vibe. Perfect for festivals, beach days, or everyday use. Spacious enough to hold all your essentials comfortably.',
      image: 'images/trending/5.svg',
      loved: true
    },
    {
      title: 'Vintage Purse',
      price: '$320',
      description: 'Vintage Style Purse Bag, Straw Knit, Holiday Bag with a timeless design. Inspired by classic styles with modern functionality. Spacious compartments for organized storage. Perfect for casual outings and vacation trips.',
      image: 'images/trending/6.svg',
      loved: false
    }
  ];
  
  
    toggleHeart(index: number){
      this.cards[index].loved = !this.cards[index].loved; 
    }
    
  cardPagination(cardsNumber : number){
    this.displayP = this.displayP === 'hidden' ? 'block' : 'hidden';
    this.cardsNumber = cardsNumber;
    console.log(this.cardsNumber);
  }
  sortCards(order:string){
    this.displaySort = this.displaySort === 'hidden' ? 'block' : 'hidden';
    this.cardsOrder = order;
  }
}
