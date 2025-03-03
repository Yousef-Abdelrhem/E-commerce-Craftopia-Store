import { Component } from '@angular/core';
import { FirstSectionComponent } from '../../Components/first-section/first-section.component';
import { SecondSectionComponent } from '../../Components/second-section/second-section.component';
import { OurReviewsComponent } from '../../Components/our-reviews/our-reviews.component';
import { AboutUsComponent } from '../../Components/about-us/about-us.component';
import { TopCategoriesComponent } from '../../Components/top-categories/top-categories.component';
import { TrendingComponent } from '../trending/trending.component';

@Component({
    selector: 'app-home',
    imports: [FirstSectionComponent,SecondSectionComponent, AboutUsComponent, TopCategoriesComponent,TrendingComponent, OurReviewsComponent],

    templateUrl: './home.component.html',
    styles: ``,
})
export class HomeComponent {}
