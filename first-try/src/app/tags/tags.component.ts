import { Component } from '@angular/core';
import { MerchandiseService } from '../services/shop/merchandise.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  tags:Tag[] = [];
  constructor(private merchandiseService:MerchandiseService) { }

  ngOnInit(): void {
    this.tags = this.merchandiseService.getAllTags();
  }
}
