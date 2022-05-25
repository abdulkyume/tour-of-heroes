import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService:MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  selctedHero !: Hero;

  heroes : Hero[] = [];

  onSelect(hero: Hero){
    this.selctedHero = hero;
    this.messageService.add('HeroCompnent : Selected hero id = '+hero.id);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}