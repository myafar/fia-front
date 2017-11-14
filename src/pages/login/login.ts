import {
    Component,
    OnInit,
    AfterContentInit,
      } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { Auth, User, IDetailedError } from '@ionic/cloud-angular';
import { Platform, AlertController } from 'ionic-angular';
import { Authorization } from '../../class/profile';
import { HomePage } from '../index';
import { RegisterPage } from '../register/register';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
//import { PROFILE } from '../../mocks/mock-profile';
import {
  Push,
} from '@ionic/cloud-angular';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit, AfterContentInit{


  public authorization: Authorization;
  form: FormGroup;
  logout: boolean;
  token : any;
  constructor(private formBuilder:FormBuilder,
              public navCtrl: NavController,
              public navParams: NavParams,
              public auth: Auth,
              public user: User,
              public platform: Platform,
              public push: Push,
              public ctrlAlert: AlertController ) {}

  ngOnInit():void{

    if ( this.navParams.get('logout') ) {
      alert('Sesion cerrada correctamente');
    }

    if ( this.auth.isAuthenticated() ) {
      this.navCtrl.setRoot(HomePage);

    }

    this.form = this.formBuilder.group({
      email:['', [Validators.email, Validators.required]],
      password:['',Validators.required],
    })

  }

  ngAfterContentInit(): void {

  }

  register(): void{
    this.navCtrl.push(RegisterPage);
  }

  onSubmit() {
   this.auth.login('basic',this.form.value)
     .then(
        () => {
          this.navCtrl.setRoot(HomePage);
        },
     (err: IDetailedError<any>) => {
        // Do something with err such as
        alert('usuario y contraseña no coinciden');
      });
   }
}
