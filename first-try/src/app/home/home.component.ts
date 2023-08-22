import { Component, OnInit } from '@angular/core';
import {MerchandiseService} from '../services/shop/merchandise.service';
import {productInfo} from '../shared/models/productinfo';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
[x: string]: any;

  shirts:productInfo[] = [];
  constructor(private merchandiseService:MerchandiseService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      if(params['searchTerm'])
        this.shirts = this.merchandiseService.getAllProductsBySearchTerm(params['searchTerm']);
      else if(params['tag'])
        this.shirts = this.merchandiseService.getAllProductsByTag(params['tag']);
      else
        this.shirts = this.merchandiseService.getAll();
    })
  }
}
