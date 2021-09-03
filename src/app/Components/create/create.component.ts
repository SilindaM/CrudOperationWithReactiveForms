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
  onSubmit() {
    this.servi.createProduct(this.productForm.value)
      .subscribe( data => {
        this.router.navigate(['']);
      });
  }
}
