import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private userService: UserService, private routeMod : Router) {

  }

  sendDataForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  onSubmit() {
    const user : User = { 
      email : this.sendDataForm.value.email,
      password : this.sendDataForm.value.password
    } as User;
    //console.log(user);
    this.userService.postUser(user).subscribe((data)=>{
      if (data) {
        localStorage.setItem("isLogin", String(data))
        this.routeMod.navigate(['home']);
      } else if(data === null) {
        this.routeMod.navigate(['login']);
      } else if (!data) {
        alert("Wrong Email or Password")
      }
    })
}
}