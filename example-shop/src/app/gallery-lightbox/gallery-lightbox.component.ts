import { Component, Input, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.component.html',
  styleUrls: ['./gallery-lightbox.component.css']
})
export class GalleryLightboxComponent implements OnInit {
  @Input() galleryData: Item[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
