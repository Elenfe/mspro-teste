import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'med-aulas';
  hide: boolean = true;

  onselect() {
    const treinamento2 = document.getElementById('menu');
    if (this.hide){
      treinamento2.classList.toggle('menu-toggle');
    }
  }

}
