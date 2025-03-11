import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
    selector: 'app-edit-profile',
    imports: [HeaderComponent, FooterComponent],
    templateUrl: './edit-profile.component.html',
})
export class EditProfileComponent {}
