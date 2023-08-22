import { Component, OnInit } from '@angular/core';
import { productInfo } from '../shared/models/productinfo';
import { ActivatedRoute } from '@angular/router';
import { MerchandiseService } from '../services/shop/merchandise.service';
import { CartService } from '../services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  shirt!: productInfo;
  constructor(activatedRoute:ActivatedRoute,
    merchandiseService: MerchandiseService,
    private cartService: CartService,
    private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.shirt = merchandiseService.getProductById(params['id']);
    })
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.shirt);
    // add a toast notification here to show "Added to Cart"
  }
}
