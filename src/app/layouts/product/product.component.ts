import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

product:any
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://fakestoreapi.com/products/${productId}`)
      .subscribe(response => {
        this.product = response;
      });
  }

}
