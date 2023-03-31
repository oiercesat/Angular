import { Injectable } from '@angular/core';
import { CD } from 'src/Modele/cd';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor(private http : HttpClient) { }

  getAllCDs(): Observable<CD[]>{
    return this.http.get<CD[]>('http://localhost:3000/CD');
  }

  
  getCdById(id: number): Observable<CD> {

    const cd = this.http.get<CD>('http://localhost:3000/CD/'+id);
    
    if (cd!==undefined) {
      return cd;
    } else {
      throw new Error("Le CD n'existe pas");
    }
  }

  createCd(cd: CD): Observable<CD> {
    return this.http.post<CD>('http://localhost:3000/CD',cd);
  }
}
