import { Component, OnInit, Input} from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() hero !: Hero;
}
