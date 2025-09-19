import { Component, AfterViewInit } from '@angular/core';
import { Card } from '../card/card';
import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';

Swiper.use([Scrollbar])

@Component({
  selector: 'app-info-service',
  imports: [Card],
  templateUrl: './info-service.html',
  styleUrl: './info-service.sass'
})
export class InfoService implements AfterViewInit {

  ngAfterViewInit(): void {
        new Swiper('.swiper', {
        slidesPerView: 3,
        spaceBetween: 5,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: true
          }, 
    });
  }
}
