import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-register',
    imports: [RouterLink, CommonModule,ReactiveFormsModule, ],
    templateUrl: './register.component.html',
})
export class RegisterComponent {
        eye = 'icons/eye.svg';    
        passType = 'password';
      
        form = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(3)]),
            email : new FormControl('', [Validators.required, Validators.email]),
            password : new FormControl('',[Validators.required, Validators.minLength(9)]),
            confirmPassword : new FormControl('',[Validators.required, Validators.minLength(9)])
        })

        get name(){
            return this.form.get('name');
        }
        get email(){
            return this.form.get('email');
        }
        get password(){
            return this.form.get('password');
        }
        get confirmPassword(){
            return this.form.get('confirmPassword');
        }
    
        changIcon(){
            this.passType = (this.passType == 'password' ? 'text' : 'password');
            this.eye = (this.eye == 'icons/eye.svg' ?'icons/hideEye.svg' : 'icons/eye.svg');
        //    console.log(this.form.get('name'));

        }
        
}
