import { Injectable } from '@angular/core';
import { HEROES } from './heroes/mok-heroes';
import { Hero } from './heroes/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[]{
    return HEROES;
  }

}
