import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/base/header/header";
import { Footer } from './components/base/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})

export class App {
  protected readonly title = signal('mvp-erp');
}
