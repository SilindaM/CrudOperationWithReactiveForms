import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

   id:number=0;
   products?:any;
  constructor(private servi:ProductService,private active:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    //when applications starts load product
    this.loadProducts();
  }
  //load Products
  loadProducts(){
   this.servi.getProducts().subscribe(
     data=>{
       this.products=data;
       console.log(data);
     },
     error=>{
       console.log(error);
     });
  }
  //go to select item
  selectedProduct(link:any,id:any){
    //if not item selected
    if(id===''){
      this.router.navigate([link]);
    }
    //if item is selected
    else{
      this.router.navigate([link +'/'+ id]);
    }
  }
  //get product details
  getDetails(id:number){
    this.router.navigate(['details',id]);
  }
  //update details
  updateDetails(update:string){
    this.router.navigate(['update']);
  }
  //delete product by id
  deleteProduct(id:any){
    this.servi.deleteProduct(id).subscribe(
      data=>{
        this.loadProducts();
      },
      error=>{
        console.log(error);
      });
  }

}
