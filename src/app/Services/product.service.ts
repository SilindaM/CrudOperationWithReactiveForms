import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private  baseUrl="http://localhost:8081/api/products/";
  constructor(private http:HttpClient) { }

  //get Product
  getProducts():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  //get Product details
  getProductDetails(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  //create Product
  createProduct(data:object):Observable<any>{
    return this.http.post<any>(this.baseUrl,data);
  }
  //update
  updateProduct(id:number,data:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,data);
  }
  //delete 
  deleteProduct(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }

}
