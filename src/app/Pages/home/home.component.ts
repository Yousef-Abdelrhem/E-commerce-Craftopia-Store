import { Component } from '@angular/core';
import { FirstSectionComponent } from '../../Components/first-section/first-section.component';
import { SecondSectionComponent } from '../../Components/second-section/second-section.component';
import { AboutUsComponent } from '../../Components/about-us/about-us.component';
import { TopCategoriesComponent } from '../../Components/top-categories/top-categories.component';

@Component({
    selector: 'app-home',
    imports: [FirstSectionComponent,SecondSectionComponent,AboutUsComponent,TopCategoriesComponent],
    templateUrl: './home.component.html',
    styles: ``,
})
export class HomeComponent {}
