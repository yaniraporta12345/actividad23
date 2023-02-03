import { Component } from '@angular/core';

@Component({
  selector: 'app-asincrona',
  templateUrl: './asincrona.component.html',
  styleUrls: ['./asincrona.component.css']
})
export class AsincronaComponent {
  suma = false
  resta = false
  multi = false
  divi = false

  suma_re = 0
  resta_re = 0
  multi_re = 0
  divi_re = 0

  num1 = 0
  num2 = 0

  resultado = ""
  resultado_res=""
  resultado_mul=""
  resultado_divi=""
  ngOnInit(){
    this.operacion()
  }
  operacion(){
    console.log(this.suma)
    if(this.suma == true){
      let resulta = this.sumaop(this.num1,this.num2)
      this.resultado = " la suma es: " +resulta.toString() +" "
    }else{
      this.resultado = ""
    }
    if(this.resta == true){
      let resulta = this.restaop(this.num1,this.num2)
      this.resultado_res = " la diferencia es: " +resulta.toString() +" "
    }else{
      this.resultado_res = ""
    }
    if(this.multi == true){
      let resulta = this.num1 * this.num2
      this.resultado_mul = " la producto es: " +resulta.toString() +" "
    }else{
      this.resultado_mul = ""
    }
    if(this.divi == true){
      let resulta = this.num1 / this.num2
      this.resultado_divi = " la division es: " +resulta.toString() +" "
    }else{
      this.resultado_divi = ""
    }
  }
  sumaop(num1:number,num2:number){
    return num1+num2
  }
  restaop(num1:number,num2:number){
    return num1-num2
  }
}
