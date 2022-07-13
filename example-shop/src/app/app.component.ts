

import { Component } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
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
      imageAlt: 'flower ring'
    },
    {
      imageSrc: '../assets/gallery/2.jpg',
      imageAlt: 'red tulips'
    },
    {
      imageSrc: '../assets/gallery/3.jpg',
      imageAlt: 'white flowers'
    },
    {
      imageSrc: '../assets/gallery/4.jpg',
      imageAlt: 'orange roses'
    },
    {
      imageSrc: '../assets/gallery/5.jpg',
      imageAlt: 'pink gerber'
    },
    {
      imageSrc: '../assets/gallery/6.jpg',
      imageAlt: 'pink rose'
    },
    {
      imageSrc: '../assets/gallery/7.jpg',
      imageAlt: 'sunflowers'
    },
    {
      imageSrc: '../assets/gallery/8.jpg',
      imageAlt: 'white roses'
    },
    {
      imageSrc: '../assets/gallery/9.jpg',
      imageAlt: 'one tulip'
    },
    {
      imageSrc: '../assets/gallery/10.jpg',
      imageAlt: 'wild flowers'
    },
    {
      imageSrc: '../assets/gallery/11.jpg',
      imageAlt: 'lgbtq flower'
    },
    {
      imageSrc: '../assets/gallery/12.jpg',
      imageAlt: 'purple roses'
    },
    {
      imageSrc: '../assets/gallery/13.jpg',
      imageAlt: 'red flowers'
    },
    {
      imageSrc: '../assets/gallery/14.jpg',
      imageAlt: 'pastels flowers'
    },
    {
      imageSrc: '../assets/gallery/15.jpg',
      imageAlt: 'colorful tulips'
    },
    {
      imageSrc: '../assets/gallery/16.jpg',
      imageAlt: 'big buquet'
    },
    {
      imageSrc: '../assets/gallery/17.jpg',
      imageAlt: 'vibrant flowers'
    },
    {
      imageSrc: '../assets/gallery/18.jpg',
      imageAlt: 'pink flowers'
    },
  
  ]
}

