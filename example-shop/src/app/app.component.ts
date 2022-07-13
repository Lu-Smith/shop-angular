

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
      imageAlt: 'Heart-shape Bouquet',
      imagePrice: `$24.50`
    },
    {
      imageSrc: '../assets/gallery/2.jpg',
      imageAlt: 'Pastel Bouquet',
      imagePrice: `$14.50`
    },
    {
      imageSrc: '../assets/gallery/3.jpg',
      imageAlt: 'White Flower',
      imagePrice: `$1.50`
    },
    {
      imageSrc: '../assets/gallery/4.jpg',
      imageAlt: 'Spring Bouquet',
      imagePrice: `$4.50`
    },
    {
      imageSrc: '../assets/gallery/5.jpg',
      imageAlt: 'Pink Gerber',
      imagePrice: `$2.20`
    },
    {
      imageSrc: '../assets/gallery/6.jpg',
      imageAlt: 'Morning Bouquet',
      imagePrice: `$9.99`
    },
    {
      imageSrc: '../assets/gallery/7.jpg',
      imageAlt: 'Sunflower',
      imagePrice: `$3.50`
    },
    {
      imageSrc: '../assets/gallery/8.jpg',
      imageAlt: 'White Rose',
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
      imageAlt: 'Purple Rose',
      imagePrice: `$3.00`
    },
    {
      imageSrc: '../assets/gallery/13.jpg',
      imageAlt: 'Red Flower',
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
      imagePrice: `$27.50`
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
    {
      imageSrc: '../assets/gallery/19.jpg',
      imageAlt: 'Loose Flowers',
      imagePrice: `$0.50`
    },
    {
      imageSrc: '../assets/gallery/20.jpg',
      imageAlt: 'Sunrise Bouquet',
      imagePrice: `$12.20`
    },
    {
      imageSrc: '../assets/gallery/21.jpg',
      imageAlt: 'Welcome Bouquet',
      imagePrice: `$12.40`
    },
    {
      imageSrc: '../assets/gallery/22.jpg',
      imageAlt: 'Love Bouquet',
      imagePrice: `$20.50`
    },
    {
      imageSrc: '../assets/gallery/23.jpg',
      imageAlt: 'Thank You Bouquet',
      imagePrice: `$16.60`
    },
    {
      imageSrc: '../assets/gallery/24.jpg',
      imageAlt: 'Red Tulip',
      imagePrice: `$2.10`
    },
    {
      imageSrc: '../assets/gallery/25.jpg',
      imageAlt: 'Flower Explosion',
      imagePrice: `$85.50`
    },
    {
      imageSrc: '../assets/gallery/26.jpg',
      imageAlt: 'Wedding Bouquet',
      imagePrice: `$17.80`
    },
    {
      imageSrc: '../assets/gallery/27.jpg',
      imageAlt: 'White-red Tulip',
      imagePrice: `$3.00`
    },
    {
      imageSrc: '../assets/gallery/28.jpg',
      imageAlt: 'Traditional Bouquet',
      imagePrice: `$29.50`
    },
    {
      imageSrc: '../assets/gallery/29.jpg',
      imageAlt: 'Evening Bouquet',
      imagePrice: `$11.50`
    },
    {
      imageSrc: '../assets/gallery/30.jpg',
      imageAlt: 'Summer Bouquet',
      imagePrice: `$6.50`
    },
    {
      imageSrc: '../assets/gallery/31.jpg',
      imageAlt: 'Blue Flower',
      imagePrice: `$1.50`
    },
    {
      imageSrc: '../assets/gallery/32.jpg',
      imageAlt: 'Red Rose',
      imagePrice: `$2.50`
    },
    {
      imageSrc: '../assets/gallery/33.jpg',
      imageAlt: 'Wedding Bouquet',
      imagePrice: `$24.50`
    },
    {
      imageSrc: '../assets/gallery/34.jpg',
      imageAlt: 'Pink Rose',
      imagePrice: `$1.80`
    },
    {
      imageSrc: '../assets/gallery/35.jpg',
      imageAlt: 'Amazing Flower',
      imagePrice: `$2.50`
    },
    {
      imageSrc: '../assets/gallery/36.jpg',
      imageAlt: 'Tulip Bouquet',
      imagePrice: `$6.50`
    },
  
  ]
}

