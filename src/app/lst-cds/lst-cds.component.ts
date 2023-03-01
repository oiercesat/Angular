import { Component, OnInit } from '@angular/core';
import { CD } from 'src/Modele/cd';

@Component({
  selector: 'app-lst-cds',
  templateUrl: './lst-cds.component.html',
  styleUrls: ['./lst-cds.component.scss']
})
export class LstCDsComponent implements OnInit {
  lstCd!: CD[];

  ngOnInit(): void {
    this.lstCd = [
      {
        id: 1,
        title: 'Tmax sur la bonne mère',
        author: 'Jul',
        price: 2,
        thumbnail:'https://www.radiofrance.fr/s3/cruiser-production/2020/11/a704959a-5146-4c95-9655-15d185d014c3/860_jul-cover-2.webp',
        dateDeSortie: new Date(2023, 1, 1),
        quantite: 200,
      },
      {
        id: 1,
        title: 'La bedaine au vélodrome',
        author: 'Jul',
        price: 1,
        thumbnail: 'https://www.radiofrance.fr/s3/cruiser-production/2020/11/0da7defa-38e8-40ab-adc6-c95dff04ffbf/870x489_jul_cover.webp',
        dateDeSortie: new Date(2023, 3, 1),
        quantite: 50,
      },
      {
        id: 1,
        title: 'Payet en claquette',
        author: 'Jul',
        price: 3,
        thumbnail: 'https://www.radiofrance.fr/s3/cruiser-production/2020/11/338eb58d-89bf-4616-8675-85627b225701/860_jul-cover-4.webp',
        dateDeSortie: new Date(2023, 2, 1),
        quantite: 10,
      },
      {
        id: 1,
        title: 'En rs3 sur le prado',
        author: 'Jul',
        price: 4,
        thumbnail: 'https://www.radiofrance.fr/s3/cruiser-production/2020/11/729bd11a-7c25-46ce-82ac-24e5e3e2498e/860_jul-cover-3.webp',
        dateDeSortie: new Date(2023, 2, 1),
        quantite: 152,
      },
      {
        id: 1,
        title: 'La twingo en Y dans ta grand-mère',
        author: 'Jul',
        price: 12,
        thumbnail: 'https://www.radiofrance.fr/s3/cruiser-production/2020/11/e1cebfdc-bb5d-4439-a6c3-15a39b1d88fb/870x489_renault_jul_twingo.webp',
        dateDeSortie: new Date(2023, 2, 1),
        quantite: 89,
      },
      {
        id: 1,
        title: 'Paris mange moi le poireau',
        author: 'Jul',
        price: 14,
        thumbnail: 'https://intrld.com/wp-content/uploads/2020/11/jul-cover.png.webp',
        dateDeSortie: new Date(2023, 2, 1),
        quantite: 78,
      },
    ]
  }
}
