import { HomePage } from './../home/home';
import { AccountProvider } from './../../providers/account/account';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private auth: AccountProvider,
    public menu: MenuController,
    private toast: ToastController) {

      this.creatForm();
  }

  private creatForm(){
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      nascimento: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(){
    if(this.form.valid) {
      this.auth.createAccount(this.form.value)
       .then( () => {
        this.toast.create({message:'Conta criada com sucesso. Foi enviado um e-mail de confirmação para você efetuar o login.',
         duration: 3000}).present();
         this.navCtrl.setRoot(HomePage);
      })
      .catch(message => {
        this.toast.create({message: message, duration: 3000}).present();
      })
    }
  }

  onClose(){
    this.navCtrl.pop();
  }

  ionViewDidEnter(){
    this.menu.enable(false);

  }

  ionViewWillLeave(){
    this.menu.enable(true);

  }


}
