import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class Inicio implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.navigateToPage()
    }, 2000);
  }

  navigateToPage() {
    this.router.navigate(['/login']);
  }

}
