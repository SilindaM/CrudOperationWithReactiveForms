import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id?:number;
  products?:Product;

  constructor(private servi:ProductService,private router:Router,private acti:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.acti.snapshot.params['id'];
    this.products=new Product();
    this.servi.getProductDetails(this.id).subscribe(
      data=>{
        this.products=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }
  //back to list button
  backToList(){
    this.router.navigate(['']);
  }

}
