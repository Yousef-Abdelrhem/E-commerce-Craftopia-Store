import { Component } from '@angular/core';
import { FirstSectionComponent } from '../../Components/first-section/first-section.component';
import { SecondSectionComponent } from '../../Components/second-section/second-section.component';
import { OurReviewsComponent } from '../../Components/our-reviews/our-reviews.component';

@Component({
    selector: 'app-home',
    imports: [FirstSectionComponent,SecondSectionComponent,OurReviewsComponent],

    templateUrl: './home.component.html',
    styles: ``,
})
export class HomeComponent {}
