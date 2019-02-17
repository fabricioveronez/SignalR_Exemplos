import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent implements OnInit {
  public apelido: string;

  constructor(private router: Router) {}


  ngOnInit() {}

  public entrar(ev: any): void {
    ev.preventDefault();
    localStorage.setItem('apelido', this.apelido);
    this.router.navigate(['/chat']);
  }
}
