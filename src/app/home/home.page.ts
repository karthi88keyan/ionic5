import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  favoriteList:  any; 

  constructor(private service:ServiceService) {
this.service.getUserData().subscribe(data=>{
this.favoriteList=data;
})
    
  }


}
