import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prueba-workbox-v3';

  constructor() {
    // console.log(window.location.href)
    // self.addEventListener('fetch', (event) => {
    //   console.log('HOLA');
    //   console.log(event);
    // });
  }
}
