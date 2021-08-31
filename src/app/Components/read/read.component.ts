import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  productId:any;
  productData:any;
  
  constructor(
    private servi:ProductService,
    private router:Router,
    private activated:ActivatedRoute
  ) { }

  ngOnInit(): void {
    //get the activated id
    this.productId=this.activated.snapshot.params['id'];
    this.loadProductDetails(this.productId);
  }
  //load data for the selected product
  loadProductDetails(productId:any){
    this.servi.getProductDetails(productId).subscribe(
      data=>{
        this.productData=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      });
  }
  //go back to the list
  backToList(link:any){
    this.router.navigate([link]);
  }

}
