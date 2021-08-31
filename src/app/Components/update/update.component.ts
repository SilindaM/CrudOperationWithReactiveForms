import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  productForm?:FormGroup;
  productId:any;
  productData:any;
  constructor(private servi:ProductService,private router:Router,private actived:ActivatedRoute,private fb:FormBuilder) {
    
    this.productForm=this.fb.group({
      name:['',Validators.required],
      description:['',Validators.required],
      price:['',Validators.required]
    });
   }
   //load product details
   loadDetails(id:any){
      this.servi.getProductDetails(id).subscribe(
        data=>{
          this.productData=data;
          this.productForm?.controls['name'].setValue(this.productData['name']);
          this.productForm?.controls['description'].setValue(this.productData['description']);
          this.productForm?.controls['price'].setValue(this.productData['price']);
       
        }
      )
   }
   //update data
   updateData(values:any){
     const productData=new FormData();
     productData.append('id',this.productId);
     productData.append('name',values.name);
     productData.append('description',values.description);
     productData.append('price',values.price);

     this.servi.updateProduct(productData).subscribe(
       data=>{
         console.log(data);
         this.router.navigate(['']);
       },
       error=>{
         console.log(error);
       }
     )
   }

  ngOnInit(): void {
    //get current id
    this.productId=this.actived.snapshot.params['id'];
    this.loadDetails(this.productId);
  }

}
