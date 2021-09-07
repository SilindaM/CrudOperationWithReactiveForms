import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {ProductService} from "../../Services/product.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Product } from 'src/app/Model/product';

@Component({
selector: 'app-update',
templateUrl: './update.component.html',
styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
productForm: FormGroup;
productID:any;
productData?: Product;
constructor( private fb: FormBuilder,private crudService: ProductService,private router: Router,private actRoute: ActivatedRoute) {
this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
//code
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

      loadProductDetails(productID:any){
            this.crudService.getProductDetails(productID).subscribe
            (product => {
              this.productData = new Product();
              this.productForm.controls['name'].setValue(this.productData['name']);
              this.productForm.controls['description'].setValue(this.productData['description']);
              this.productForm.controls['price'].setValue(this.productData['price']);
              this.productData=product;
        });
}
updateProductData(values:any){
  const productData = new FormData();
 
  this.productID=this.actRoute.snapshot.params['id'];
  productData.append('name',values.name);
  productData.append('description',values.description);
  productData.append('price', values.price);

  this.crudService.updateProduct(this.productID,productData).subscribe
  (result=>{
    this.productData=new Product();
    this.router.navigate(['']);
  });
  }
ngOnInit() {
  this.productID = this.actRoute.snapshot.params['id'];
  this.crudService.getProductDetails(this.productID).subscribe(
    data=>{
      this.productData=data;
    },
    error=>{
      console.log(error);
    });
  }
  onSubmit(){
    console.log(this.productForm.value);
    this.crudService.updateProduct(this.productID,this.productForm.value).subscribe(
      res=>{
        console.log("welcome");
        this.router.navigate(['']);
      }
    )
  }
}