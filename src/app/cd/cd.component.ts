import { Component, Input } from '@angular/core';
import { CD } from './../../Modele/cd';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CdComponent {
  @Input() cd!: CD;
  onAddCd(){
    this.cd.quantite+=1;
  }
}
