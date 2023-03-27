import { Component, Input , OnInit} from '@angular/core';
import { CD } from './../../Modele/cd';
import { CdsService } from './../services/cds.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CdComponent implements OnInit {
  @Input() cd!: CD; // reçu par le template liste-cd.component.html
  unCd!: CD;        // reçu par le template cd.component.html

  constructor(private cdsService: CdsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idCd = this.route.snapshot.params['id'];
    if (idCd === undefined) {
      this.unCd = this.cd;
    } else {
      this.unCd = this.cdsService.getCdById(+idCd);
    }
  }

  onAddCd(){
    this.cd.quantite+=1;
  }
}
