import { Component, OnInit } from '@angular/core';
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {
  search = faSearch
  flecha = faArrowRight
  constructor() { }

  ngOnInit(): void {
  }

}
