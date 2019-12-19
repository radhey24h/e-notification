import { Component, OnInit } from '@angular/core';
import { RouterTransition } from '../../app-routing.animation';
import { UserService } from 'src/app/+core/user/user.service';
import { User } from 'src/app/+shared/models/user';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    animations: [RouterTransition()]
})
export class SignupComponent implements OnInit {
    constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
        this.user = new User()
    }
    user: User;
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', EmailValidator, Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.user = this.getUserType(this.registerForm.value);

        this.loading = true;
        this.userService.addUser(this.user).pipe(first()).subscribe(
            data => {
                this.router.navigate(['/login']);
            },
            error => {
                this.loading = false;
            });
    }

    getUserType(value: any): User {
        this.user.firstName = value.firstName;
        this.user.lastName = value.lastName;
        this.user.email = value.email;
        this.user.password = value.password;
        this.user.userType = 'admin';

        return this.user;
    }

}
