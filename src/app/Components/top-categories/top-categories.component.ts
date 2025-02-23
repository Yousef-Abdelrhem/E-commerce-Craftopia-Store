import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryCardComponent } from '../category-card/category-card.component';

@Component({
  selector: 'app-top-categories',
  imports:[CommonModule, CategoryCardComponent],
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.css']
})
export class TopCategoriesComponent {
  categories = [
    { name: 'Bags', image: 'Bags.png', link: '/bags' },
    { name: 'Frames', image: 'Frames.png', link: '/frames' },
    { name: 'Accessories', image: 'Accessories.png', link: '/accessories' },
    { name: 'Tablecloth', image: 'Tablecloth.png', link: '/tablecloth' },
    { name: 'Clothes', image: 'Clothes.png', link: '/clothes' },
    { name: 'Sock and Glove', image: 'SockandGlove.png', link: '/socks-gloves' }
  ];
}
