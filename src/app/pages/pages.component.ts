import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  currentRoute: string='';
  isSideNavCollpased=false

  constructor(
    private router:Router,
  ) { 
   
  }

  ngOnInit() {
    this.currentRoute=this.router.url.split('/')[1]
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((data:any)=>{
      console.log('data', data)
      this.currentRoute=data.url.split('/')[1]

    })
  }

}
