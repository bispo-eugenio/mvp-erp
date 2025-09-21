import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/base/header/header';
import { Footer } from './components/base/footer/footer';
import { InfoService } from './components/landing-page/info-service/info-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InfoService, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
//, Header, Footer, InfoService
export class App {
  protected readonly title = signal('mvp-erp');
}
