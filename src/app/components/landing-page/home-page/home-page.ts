import { Component } from '@angular/core';
import { Header } from '../../base/header/header';
import { Footer } from '../../base/footer/footer';
import { InfoService } from '../info-service/info-service';

@Component({
  selector: 'app-home-page',
  imports: [Header, Footer, InfoService],
  templateUrl: './home-page.html',
  styleUrl: './home-page.sass'
})
export class HomePage {

}
