import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public products:any=[];
  constructor(private servi:ProductService,private router:Router) { }

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
