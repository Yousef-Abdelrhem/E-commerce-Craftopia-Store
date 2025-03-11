import { Component } from '@angular/core';
import { CartServiceService } from '../../Services/cart-service.service';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.component.html',
   
})
export class HeaderComponent {
    constructor(private cartService: CartServiceService) {}

    toggleCart(event: Event) {
        event.preventDefault();
        this.cartService.toggleCart();
    }
}
