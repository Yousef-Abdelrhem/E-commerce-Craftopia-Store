import { Component } from '@angular/core';
import { FirstSectionComponent } from '../../Components/first-section/first-section.component';
import { SecondSectionComponent } from '../../Components/second-section/second-section.component';

@Component({
    selector: 'app-home',
    imports: [FirstSectionComponent,SecondSectionComponent],
    templateUrl: './home.component.html',
    styles: ``,
})
export class HomeComponent {}
