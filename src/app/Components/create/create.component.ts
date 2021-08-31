import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productForm?:FormGroup;
  constructor( private servi:ProductService,  private fb:FormBuilder,  private router:Router ) { 
    this.productForm=this.fb.group({
      name:['',Validators.required],
      description:['',Validators.required],
      price:['',Validators.required]
    });
  }
 

  ngOnInit(): void {
  }
  saveProduct(values:any){
    const  productData=new FormData();
    productData.append('name',values.name);
    productData.append('description',values.description);
    productData.append('price',values.price);

    this.servi.createProduct(productData).subscribe(
      data=>{
          console.log(data);
          this.router.navigate(['']);
    },
    error=>{
      console.log(error);
    });
  }

}
