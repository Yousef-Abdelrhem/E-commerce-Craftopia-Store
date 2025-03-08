import { Component } from '@angular/core';
import { CartServiceService } from '../../Services/cart-service.service';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
    constructor(private cartService: CartServiceService) {}

    toggleCart(event: Event) {
        event.preventDefault();
        this.cartService.toggleCart();
    }
}
