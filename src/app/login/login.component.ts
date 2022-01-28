import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  user: any = {};
  message: string = "";

  ngOnInit(): void {
  }

  onLogin(){
   
    if(this.user.email == "Admin" && this.user.password == "12345"){
      // this.router.navigateByUrl('/sidebar');
      this.user = {};
    }else{
      this.message = "Error test"
     
    }
    
  }

}


