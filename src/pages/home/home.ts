import { Component,
         OnInit,
       } from '@angular/core';
import { NavController,
         NavParams
       } from 'ionic-angular';
import { Auth,
         User,
         UserDetails,
         IDetailedError } from '@ionic/cloud-angular';
import { ApiService } from '../../api/api.services';
import { Profesional } from '../../class/profile';
import { LoginPage } from '../login/login';
import { ProfesionalsPage } from '../index';
@Component({
  selector: 'page-home',
   templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  pageTitle: string;
  profesionals : Profesional[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: ApiService,
              public user: User,
              public auth: Auth,
  ) {}


  ngOnInit(){

    if ( !this.auth.isAuthenticated() ) {
      this.navCtrl.push(LoginPage);
    }
    

    this.pageTitle = 'Inicio';
    this.getProfesionals();
  }

  getProfesionals(): void {
    this.api.getProfesionals()
    .subscribe(
      profesionals => this.profesionals = profesionals,
      err => console.log(err),
      () => console.log(this.profesionals)
    )
  }

  profesionalDetail( profesional: Profesional ): void {
     this.navCtrl.push(ProfesionalsPage, { 'profesional': profesional });
  }


}
