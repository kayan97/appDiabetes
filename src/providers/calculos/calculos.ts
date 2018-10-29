import { Directive } from '@angular/core';

@Directive({
  selector: '[calculos]' // Attribute selector
})
export class CalculosDirective {

  static calcularImc(alt: number, peso: number): number{
    return ( peso / ( alt * alt ));
  }

  static informarImc(imc: number): string{
    if(imc < 16)
      return "Magreza grave";
    else if(imc < 17)
      return "Magreza moderada";
    else if(imc < 18.5)
      return "Magreza leve";
    else if(imc < 25)
      return "Saudável";
    else if(imc < 30)
      return "Sobrepeso";
    else if(imc < 35)
      return "Obesidade grau I";
    else if(imc < 40)
      return "Obesidade grau II (Severa)";
    else
      return "Obesidade grau III (Mórbida)";

  }

  constructor() {
    console.log('Hello CalculosDirective Directive');
  }

}
