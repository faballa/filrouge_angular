import { User } from './../models/user';
import { AuthentificationService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor( private auth: AuthentificationService,private router:Router) { }


  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }
  onConnexion(){ 
    console.log(this.loginForm.value);
    const user={
      username: this.loginForm.value.username,
      password: this.loginForm.value.password

    } as User

    this.auth.getConnexion(user).subscribe(data =>{
      console.log(data) ;
      localStorage.setItem('token',data.token)
      this.router.navigate([
          "accueil"
      ])
    })

  }

}
