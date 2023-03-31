import { Component } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Observable } from 'rxjs';
import { CD } from '../../Modele/cd';
import { map } from 'rxjs/operators';
import { CdComponent } from '../cd/cd.component';
import { Validators } from '@angular/forms';
import { CdsService } from '../services/cds.service';


@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrls: ['./new-cd.component.scss']
})
export class NewCDComponent {
  formulaire!: FormGroup;
  currentCd$! : Observable<CD>;
  
  constructor(
    private formBuilder: FormBuilder,
    private cdsService: CdsService
    ) { }
    
    ngOnInit(): void {
    let thumbRegex = new RegExp('^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$');

    this.formulaire = this.formBuilder.group({
      title: [null,[Validators.required,Validators.minLength(3)]],
      author: [null,[Validators.required,Validators.minLength(1)]],
      price: [null,[Validators.required,Validators.min(0)]],
      thumbnail: [null,[Validators.required,Validators.pattern(thumbRegex)]],
      dateDeSortie: [null,[Validators.required,Validators.minLength(10)]],
      quantite: [null,[Validators.required,Validators.min(0)]],
    },
    {
      updateOn: 'blur'
    }
    );

      this.currentCd$ = this.formulaire.valueChanges.pipe(map(formValue => (
        {
          id: 0,
          title: formValue.title,
          author : formValue.author,
          price : formValue.price,
          thumbnail : formValue.thumbnail,
          dateDeSortie : formValue.dateDeSortie,
          quantite : formValue.quantite,
        }
      )));
    }

  addCd() {
    let unNouveauCd: CD= {
      id: 0,
      title: this.formulaire.value.title,
      author : this.formulaire.value.author,
      price : this.formulaire.value.price,
      thumbnail : this.formulaire.value.thumbnail,
      dateDeSortie : this.formulaire.value.dateDeSortie,
      quantite : this.formulaire.value.quantite,
    }
    this.cdsService.createCd(unNouveauCd).subscribe();  
  }
}
