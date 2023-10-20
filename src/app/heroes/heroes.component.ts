import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{
  heroes: Hero[] = [];

  selectedHero?: Hero;

  getHeroes(): void{
    this.heroes = this.HeroService.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  constructor(private HeroService: HeroService){ }

  ngOnInit(): void{
    this.getHeroes();
  }

}
