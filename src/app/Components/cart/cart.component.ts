import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartServiceService } from '../../Services/cart-service.service';

@Component({
    selector: 'app-cart',
    imports: [CommonModule],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
    isCartVisible = false;

    constructor(private cartService: CartServiceService) {}

    ngOnInit() {
        this.cartService.cartVisible$.subscribe((visible) => {
            this.isCartVisible = visible;
        });
    }

    closeCart() {
        this.cartService.toggleCart();
    }
}
