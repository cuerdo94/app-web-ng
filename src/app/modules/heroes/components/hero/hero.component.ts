import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  name: string = "Iron Man";
  age: number = 30;
  powers: string[] = ["Super Strength", "Flight", "Heat Vision"];

  get capitelizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `This is a hero with name ${this.name} and age ${this.age}`
  }
  changeName(): void {
    this.name = this.name == "Batman" ? "Iron Man" : "Batman";
  }
  changeAge(): void {
    this.age += 1;
  }
}
