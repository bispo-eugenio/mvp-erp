import { Component, AfterViewInit } from '@angular/core';
import { Card } from '../card/card';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { cards } from '../../../mock/mock-cards';
import { CardInterface } from '../../../interfaces/card';
Swiper.use([Pagination])

@Component({
  selector: 'app-info-service',
  imports: [Card],
  templateUrl: './info-service.html',
  styleUrl: './info-service.sass'
})
export class InfoService implements AfterViewInit {

  ngAfterViewInit(): void {
        new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: 15,  
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
    });
  }

  cards: CardInterface[] = cards 
}
