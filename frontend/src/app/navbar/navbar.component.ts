import { Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
menuView:boolean=true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.menuView=false;
    this.router.navigate(['dashboard'])
  }
  logout(){
    this.menuView=true;
    this.router.navigate(['home']);
  }
}
