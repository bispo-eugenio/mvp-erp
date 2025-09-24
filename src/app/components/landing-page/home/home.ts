import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import { ImageInterface } from '../../../interfaces/image';
import { Images } from '../../../mock/mock-image';
Swiper.use([Navigation, Autoplay]);

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.sass'
})
export class Home implements AfterViewInit{
  ngAfterViewInit(): void {
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
      navigation:  {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000
      }
  })

  }
  images: ImageInterface[] = Images

}
