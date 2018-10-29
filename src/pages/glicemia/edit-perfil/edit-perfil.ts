import { PerfilProvider } from './../../../providers/perfil/perfil';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-edit-perfil',
  templateUrl: 'edit-perfil.html',
})
export class EditPerfilPage {

  title: string;
  form: FormGroup;
  perfil: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private toast: ToastController,
    private perfilProvider: PerfilProvider) {
      this.perfil = this.navParams.data.perfil || {};
      this.SetupPageTitle();
      this.createForm();

      const consulta = this.perfilProvider.get(this.navParams.data.perfilkey).subscribe((Data: any) =>{
        consulta.unsubscribe();
        this.perfil = Data;
        this.createForm();
      });
  }

  private SetupPageTitle(){
    if(this.navParams.data.categoria){
      this.title = 'Alterando Perfil';
    }
    else{
      this.title = 'Nova Perfil';
    }
  }

  private createForm(){
    this.form = this.formBuilder.group({
      key: [this.perfil.key],
      nome: [this.perfil.nome, Validators.required],
      data: [this.perfil.data],
      cafedaManha: [this.perfil.cafedaManha, Validators.required],
      poscafe: [this.perfil.poscafe],
      almoco: [this.perfil.almoco, Validators.required],
      posalmoco: [this.perfil.posalmoco],
      cafedatarde: [this.perfil.cafedatarde],
      janta: [this.perfil.janta, Validators.required],
      posjanta: [this.perfil.posjanta],
      antesdedormi: [this.perfil.antesdedormi]


    })
  }

  onSubmit(){
    if(this.form.valid){
      this.perfilProvider.save(this.form.value);
      this.toast.create({ message: 'Perfil salva com sucesso!', duration: 3000 }).present();
      this.navCtrl.pop();
    }
  }


}
