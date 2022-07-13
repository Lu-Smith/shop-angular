

import { Component } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
  imagePrice: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = "gallery-lightbox";

  data: Item[] = [
    {
      imageSrc: '../assets/gallery/1.jpg',
      imageAlt: 'Flower Ring',
      imagePrice: `$4.50`
    },
    {
      imageSrc: '../assets/gallery/2.jpg',
      imageAlt: 'Red Tulips',
      imagePrice: `$2.50`
    },
    {
      imageSrc: '../assets/gallery/3.jpg',
      imageAlt: 'White Flowers',
      imagePrice: `$1.50`
    },
    {
      imageSrc: '../assets/gallery/4.jpg',
      imageAlt: 'Orange Roses',
      imagePrice: `$2.50`
    },
    {
      imageSrc: '../assets/gallery/5.jpg',
      imageAlt: 'Pink Gerber',
      imagePrice: `$2.20`
    },
    {
      imageSrc: '../assets/gallery/6.jpg',
      imageAlt: 'Pink Rose',
      imagePrice: `$2.40`
    },
    {
      imageSrc: '../assets/gallery/7.jpg',
      imageAlt: 'Sunflowers',
      imagePrice: `$3.50`
    },
    {
      imageSrc: '../assets/gallery/8.jpg',
      imageAlt: 'White Roses',
      imagePrice: `$2.60`
    },
    {
      imageSrc: '../assets/gallery/9.jpg',
      imageAlt: 'Random Tulip',
      imagePrice: `$2.10`
    },
    {
      imageSrc: '../assets/gallery/10.jpg',
      imageAlt: 'Wild Flowers',
      imagePrice: `$5.50`
    },
    {
      imageSrc: '../assets/gallery/11.jpg',
      imageAlt: 'lgbtq Flower',
      imagePrice: `$2.80`
    },
    {
      imageSrc: '../assets/gallery/12.jpg',
      imageAlt: 'Purple Roses',
      imagePrice: `$3.00`
    },
    {
      imageSrc: '../assets/gallery/13.jpg',
      imageAlt: 'Red Flowers',
      imagePrice: `$2.50`
    },
    {
      imageSrc: '../assets/gallery/14.jpg',
      imageAlt: 'Pastels Flowers',
      imagePrice: `$2.50`
    },
    {
      imageSrc: '../assets/gallery/15.jpg',
      imageAlt: 'Colorful Tulips',
      imagePrice: `$6.50`
    },
    {
      imageSrc: '../assets/gallery/16.jpg',
      imageAlt: 'Big Bouquet',
      imagePrice: `$21.50`
    },
    {
      imageSrc: '../assets/gallery/17.jpg',
      imageAlt: 'Vibrant Flowers',
      imagePrice: `$6.50`
    },
    {
      imageSrc: '../assets/gallery/18.jpg',
      imageAlt: 'Pink Flowers',
      imagePrice: `$4.50`
    },
  
  ]
}

