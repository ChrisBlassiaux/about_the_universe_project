
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-index-planets',
  templateUrl: './index-planets.component.html',
  styleUrls: ['./index-planets.component.scss']
})
export class IndexPlanetsComponent {
  planets: any = [];
  planetsSaved: any = [];

  // Injection de dépendance
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPlanets();

    // Solution avancée
    // const numberPage = await this.getNumberPages();
    // this.getPlanets(numberPage);
  }

  // Solution novice
  getPlanets() {
    this.http
    .get('https://swapi.dev/api/planets/')
    .subscribe((data: any) => {
      for (let i = 1; i <= Math.ceil(data.count / 10); i++) {
        this.http
        .get('https://swapi.dev/api/planets/?page=' + i)
        .subscribe((data: any) => {
          this.planets = this.planets.concat(data.results);
          this.planetsSaved = this.planetsSaved.concat(data.results);
        })
      }
    })
  }

  filterByPopulation(event: any) {
    this.planets = this.planetsSaved;
    if (event.target.value === '1') {
      this.planets = 
        this.planets.filter((planet: any) => planet.population < 100000);
    } else if (event.target.value === '2') {
      this.planets = 
        this.planets.filter((planet: any) => {
          return planet.population >= 100000 && planet.population < 100000000
        });
    } else if (event.target.value === '3') {
      this.planets = 
        this.planets.filter((planet: any) => {
          return planet.population >= 100000000
        });
    }
  }

  // Solution avancée
  // async getNumberPages() {
  //   return new Promise(resolve => {
  //     this.http
  //     .get('https://swapi.dev/api/planets/')
  //     .subscribe((data: any) => {
  //       resolve(data.count / 10);
  //     })
  //   })
  // }

  // getPlanets(numberPage: any) {
  //   for (let i = 1; i <= numberPage; i++) {
  //     this.http
  //     .get('https://swapi.dev/api/planets/?page=' + i)
  //     .subscribe((data: any) => {
  //       this.planets = this.planets.concat(data.results);
  //     })
  //   }
  // }
}
