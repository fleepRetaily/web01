import { Component } from '@angular/core';
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'envios';
  search = faSearch
  flecha = faArrowRight
}
