import { Component } from '@angular/core';
import { ButtonComponent } from '../../Components/button/button.component';
import { RouterLink } from '@angular/router';
import {FormGroup , FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    imports: [ButtonComponent, RouterLink, ReactiveFormsModule, CommonModule],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    eye = 'icons/eye.svg';    
    passType = 'password';
    form = new FormGroup({
        email : new FormControl('', [Validators.required, Validators.email]),
        password : new FormControl('',[Validators.required, Validators.minLength(9)])
    })

    
    get email(){
        return this.form.get('email');
    }
    get password(){
        return this.form.get('password');
    }
    

    changIcon(){
        this.passType = (this.passType == 'password' ? 'text' : 'password');
        this.eye = (this.eye == 'icons/eye.svg' ?'icons/hideEye.svg' : 'icons/eye.svg');
    }
}
