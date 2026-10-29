import { Component, Signal } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Sidebar } from './sidebar/sidebar';


@Component({
  imports: [Header, Footer, Sidebar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = ('my-website');
}
