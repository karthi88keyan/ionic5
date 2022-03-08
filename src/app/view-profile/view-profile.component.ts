import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
export interface user{
  name:string;
  address:string;
  profileDetail:string;
  id:number;
image:string;
}
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {

  favoriteList:any; 
  profileDetail:user;

  constructor(private service:ServiceService,public toastController: ToastController,private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params) {
        
        this.service.getUserData().subscribe(data=>{
          this.favoriteList=data;
          let profileIndex=this.favoriteList.findIndex(x=>x.id==params.id);
    if(profileIndex>=0){
      this.profileDetail=this.favoriteList[profileIndex];
    }
          })
      }
    });


    
  }
  ngOnInit() {}
  async presentToast(message) {
    const toast = await this.toastController.create({
      position: 'top',
      message,
      color:"primary",
      duration: 2000
    });
    toast.present();
    let profileIndex=this.favoriteList.findIndex(x=>x.id==this.profileDetail.id);
    if(profileIndex>=0){
      this.profileDetail=this.favoriteList[profileIndex+1];
    }
  }
}
