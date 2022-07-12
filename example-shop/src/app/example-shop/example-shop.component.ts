import { Component, Input, OnInit } from '@angular/core';
interface Item {
 imageSrc: string;
 imageAlt: string;

}

@Component({
  selector: 'app-example-shop',
  templateUrl: './example-shop.component.html',
  styleUrls: ['./example-shop.component.css']
})
export class ExampleShopComponent implements OnInit {
   @Input() galleryData: Item[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
