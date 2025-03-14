import { Component } from '@angular/core';
// import { FirstSectionComponent } from '../../Components/first-section/first-section.component';
// import { SecondSectionComponent } from '../../Components/second-section/second-section.component';
// import { OurReviewsComponent } from '../../Components/our-reviews/our-reviews.component';
// import { AboutUsComponent } from '../../Components/about-us/about-us.component';
// import { TopCategoriesComponent } from '../../Components/top-categories/top-categories.component';
// import { TrendingComponent } from '../trending/trending.component';
import { FooterComponent } from '../../Components/footer/footer.component';
// import { CartComponent } from '../../Components/cart/cart.component';
import { CheckoutComponent } from '../../Components/checkout/checkout.component';

@Component({
    selector: 'app-home',
    imports: [
        // FirstSectionComponent,
        // SecondSectionComponent,
        // AboutUsComponent,
        // TopCategoriesComponent,
        // TrendingComponent,
        // OurReviewsComponent,
        FooterComponent,
        // CartComponent,
        CheckoutComponent
    ],

    templateUrl: './home.component.html',
    styles: ``,
})
export class HomeComponent {}
