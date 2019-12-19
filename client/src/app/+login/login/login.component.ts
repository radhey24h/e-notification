import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTransition } from '../../app-routing.animation';
import { UserService } from 'src/app/+core/user/user.service';
import { FormBuilder, Validators, FormGroup, EmailValidator } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    animations: [RouterTransition()]
})
export class LoginComponent implements OnInit {
    constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    ngOnInit() {
        if (localStorage.getItem('isLoggedin')) {
            this.router.navigate(['/admin']);
        }
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.required]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.userService.getUsers().subscribe(
            data => {
                if (data.find(x => x.email === this.f.email.value && x.password === this.f.password.value)) {
                    this.router.navigate(['/admin']);
                    localStorage.setItem('isLoggedin', 'true');
                }
            },
            error => {
                this.loading = false;
                console.log(error);
            });

    }
}
