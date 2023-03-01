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
        thumbnail: 'https://pbs.twimg.com/media/EmZqmvqW8AgJ1iD?format=jpg&name=largeblablabla',
        dateDeSortie: new Date(2023, 1, 1),
        quantite: 5000,
      },
      {
        id: 1,
        title: 'La bedaine au vélodrome',
        author: 'Jul',
        price: 1,
        thumbnail: 'https://www.radiofrance.fr/s3/cruiser-production/2020/11/0da7defa-38e8-40ab-adc6-c95dff04ffbf/870x489_jul_cover.webp',
        dateDeSortie: new Date(2023, 3, 1),
        quantite: 5000,
      },
      {
        id: 1,
        title: 'Payet en claquette',
        author: 'Jul',
        price: 3,
        thumbnail: 'https://www.radiofrance.fr/s3/cruiser-production/2020/11/338eb58d-89bf-4616-8675-85627b225701/860_jul-cover-4.webp',
        dateDeSortie: new Date(2023, 2, 1),
        quantite: 3000,
      },
    ]
  }
}
