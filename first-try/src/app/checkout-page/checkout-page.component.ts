
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit{
checkout: any;
page: any;

@Input() notFoundMessage: string = "Thank you for your Order";
@Input() resetLinkText: string = "Return to Shop";
@Input() resetLinkRoute: string = "/shop";

ngOnInit(): void {

}
}
