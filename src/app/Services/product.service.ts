import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private  baseUrl="";
  constructor(private http:HttpClient) { }

  //get Product
  getProducts(){
    return this.http.get(this.baseUrl);
  }
  //get Product details
  getProductDetails(id:any){
    return this.http.get(this.baseUrl);
  }
  //create Product
  createProduct(data:any){
    return this.http.post(this.baseUrl,data);
  }
  //update
  updateProduct(data:any){
    return this.http.put(this.baseUrl,data);
  }
  //delete 
  deleteProduct(id:any){
    return this.http.delete(this.baseUrl);
  }

}
