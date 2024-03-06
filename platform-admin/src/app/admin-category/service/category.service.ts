import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { category } from '../models/category';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl= environment.apiUrl;
  constructor(private http: HttpClient){}


  addCategory(data: any) {
  return this.http.post(`${this.apiUrl}/api/v1/productCategory`, data);
  // return this.http.post<category>(`${this.apiUrl}/api/v1/productCategory`, data);
}

getCategories(): Observable<category[]> {
  return this.http.get<category[]>(`${this.apiUrl}/api/v1/productCategory`);
}

getCategoryById(id: string) {
  return this.http.get(`${this.apiUrl}/api/v1/productCategory/${id}`);
}



deleteCategory(id: string){
  return this.http.delete<category[]>(`${this.apiUrl}/api/v1/productCategory/${id}`);
}




editCategory(categoryId: string, updatedCategory: category): Observable<any> {
  return this.http.put<category>(`${this.apiUrl}/api/v1/productCategory/${categoryId}`, updatedCategory);
}



}
