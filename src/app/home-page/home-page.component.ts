import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  countCharacters: number = 0;
  countVehicles: number = 0;
  countPlanets: number = 0;

  // Injection de dépendance
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCharacters();
    this.getVehicles();
    this.getPlanets();
  }

  getCharacters() {
    this.http
      .get('https://swapi.dev/api/people/')
      .subscribe((data: any) => {
        this.countCharacters = data.count;
      })
  }

  getVehicles() {
    this.http
      .get('https://swapi.dev/api/vehicles/')
      .subscribe((data: any) => {
        this.countVehicles = data.count;
      })
  }

  getPlanets() {
    this.http
      .get('https://swapi.dev/api/planets/')
      .subscribe((data: any) => {
        this.countPlanets = data.count;
      })
  }
}
