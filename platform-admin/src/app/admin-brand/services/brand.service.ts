import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Brand } from '../model/brand';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl= environment.apiUrl;
  constructor(private http: HttpClient){}


  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.apiUrl}/api/v1/brand`);
  }
  
}
