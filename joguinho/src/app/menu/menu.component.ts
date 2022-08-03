import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  lista = [{
    nome: "Camilly",
    score: "2099"
  },
  {
    nome: "Ester",
    score: "2099"
  },
  {
    nome: "Otavio",
    score: "2099"
  },
  {
    nome: "Camilly",
    score: "2099"
  },
  {
    nome: "ester",
    score: "2099"
  },
  {
    nome: "otavio",
    score: "2099"
  }];

  modal = false;
  nome(){
    this.modal = !this.modal
  }

  ngOnInit(): void {
  }

}
