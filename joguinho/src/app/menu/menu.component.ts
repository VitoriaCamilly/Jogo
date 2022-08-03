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
  }
  ];

  ngOnInit(): void {
  }

}
