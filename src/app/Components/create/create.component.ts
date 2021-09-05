import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product:Product=new Product();
  submitted=false;

  productForm:FormGroup;
  constructor( private servi:ProductService,  private fb:FormBuilder,  private router:Router ) { 
   
    this.productForm=this.fb.group({
      name:['',Validators.required],
      description:['',Validators.required],
      price:['',Validators.required]
    });
  }
 

  ngOnInit(): void {
  }
  get ProductName(){
    return this.productForm.get('name');
  }
  get ProductDescription(){
    return this.productForm.get('description');
  }
  get ProductPrice(){
    return this.productForm.get('price');
  }
  saveProduct(product:any){
      this.product=new Product();
      this.product.name=this.ProductName?.value;
      this.product.description=this.ProductDescription?.value;
      this.product.price=this.ProductPrice?.value;
      this.submitted=true;

      this.servi.createProduct(this.product).subscribe(
        data=>{
          console.log(data);
        },
        error=>{
          console.log(error);
        });
        this.product=new Product();
        this.home();
  }
  //back to home
     home(){ 
       this.router.navigate(['']);
       //reload the content to show new content
      
     }
}
