import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro2',
  templateUrl: './meu-primeiro2.component.html',
  styleUrls: ['./meu-primeiro2.component.css']
})
export class MeuPrimeiro2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 primeiro (){
   alert(this.nome[1])
   
 }

  nome:string[] = ["Eu","Tu","Ele"]



}
