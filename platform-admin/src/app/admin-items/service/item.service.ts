import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Item } from '../model/item';
import { category } from 'src/app/admin-category/models/category';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  apiUrl= environment.apiUrl;
  constructor(private http: HttpClient){}


  addItem(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/v1/categoryItem`, data);
  }

  getCategories(): Observable<category[]> {
    return this.http.get<category[]>(`${this.apiUrl}/api/v1/productCategory`);
  }
  
  getItem(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/api/v1/categoryItem`);
  }

  getitemById(id: string) {
    return this.http.get(`${this.apiUrl}/api/v1/categoryItem/${id}`);
  }
  
  
deleteItem(id: string){
  return this.http.delete<Item[]>(`${this.apiUrl}/api/v1/categoryItem/${id}`);
}

editItem(itemId: string, updateditem: Item): Observable<any> {
  return this.http.put<Item>(`${this.apiUrl}/api/v1/categoryItem/${itemId}`, updateditem);
}

  
}