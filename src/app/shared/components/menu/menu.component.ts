import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent implements OnInit {

  public items: MenuItem[] = [];


  ngOnInit(): void {
    this.items = [
      {
        label: "Pipes de Angular",
        icon: "pi pi-desktop",
        items: [
          {
            label: "Textos y Fechas",
            icon: "pi pi-align-left",
            routerLink: "''"
          },
          {
            label: "Numeros",
            icon: "pi pi-dollar",
            routerLink: "numbers"
          },
          {
            label: "No comunes",
            icon: "pi pi-globe",
            routerLink: "uncommon"

          },
        ]
      },
      {
        label: "Pipes personalizados",
        icon: "pi pi-cog",
        items: [
          {
            label: "Otro elemento",
            icon: "pi pi-cog",
          }
        ]
      }
    ]

  }



}
