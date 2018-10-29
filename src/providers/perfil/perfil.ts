import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';




@Injectable()
export class PerfilProvider {

  private PATH = 'perfils/';
  constructor(private db:AngularFireDatabase) {}

  getAll(){
    return this.db.list(this.PATH)
      .snapshotChanges()
      .map(changes => {
        return changes.map( c => ({ key: c.key, ...c.payload.val() }));
      })
  }

  get(key: string){
    return this.db.object(this.PATH + key)
      .snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      })
  }

  save(perfilData: any){
    const perfil = {
      nome: perfilData.nome,
      data: perfilData.data,
      cafedaManha:perfilData.cafedaManha,
      poscafe: perfilData.poscafe,
      almoco: perfilData.almoco,
      posalmoco: perfilData.posalmoco,
      cafedatarde: perfilData.cafedatarde,
      janta: perfilData.janta,
      posjanta: perfilData.posjanta,
      antesdedormi: perfilData.antesdedormi,

    };

    if(perfilData.key){
      this.db.list(this.PATH).update(perfilData.key, perfil);
    }
    else{
      this.db.list(this.PATH).push(perfil);
    }
  }

  remove(key:string){
    this.db.list(this.PATH).remove(key);
  }

}
