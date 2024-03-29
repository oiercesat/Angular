import { Component, OnInit } from '@angular/core';
import { CD } from 'src/Modele/cd';
import { CdsService } from '../services/cds.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lst-cds',
  templateUrl: './lst-cds.component.html',
  styleUrls: ['./lst-cds.component.scss']
})
export class LstCDsComponent implements OnInit {
  lstCd!: Observable<CD[]>;

  constructor(private cdsService: CdsService) { }
  ngOnInit(): void {
    this.lstCd = this.cdsService.getAllCDs();
  }
}
