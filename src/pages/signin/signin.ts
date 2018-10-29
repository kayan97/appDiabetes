import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { AccountProvider } from './../../providers/account/account';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  form: FormGroup;
  userName: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private accountProvider: AccountProvider,
    public menu: MenuController,
    private toast: ToastController,
    private auth: AngularFireAuth) {

      this.creatForm();
  }

  createAccount(){
    this.navCtrl.push('SignupPage');
  }

  Resetpassword(){
    this.navCtrl.push('ForgotPasswordPage');
  }

  private creatForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  onSubmit(){
    if(this.form.valid) {
      this.accountProvider.login(this.form.value)
       .then( (user: any) => {
         if (user.emailVerified){
           this.navCtrl.setRoot(HomePage);
         } else {
           this.toast.create({ message:'Seu e-mail ainda não foi verificado. Por favor acesse seu e-mail e clique no link para verificar conta', duration: 6000 }).present();
         }
      })
      .catch(message => {
        this.toast.create({message: message, duration: 3000}).present();
      })
    }
  }

  signOut(){
    this.auth.auth.signOut();
      const userState = this.auth.authState.subscribe( user =>{
        if(!user){
          this.userName = '';
          this.navCtrl.setRoot(HomePage);
          userState.unsubscribe();
        }
      })
  }

  ionViewDidEnter(){
    this.menu.enable(false);

  }

  ionViewWillLeave(){
    this.menu.enable(true);

  }


}
