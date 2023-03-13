import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-index-people',
  templateUrl: './index-people.component.html',
  styleUrls: ['./index-people.component.scss']
})
export class IndexPeopleComponent {
  people: any = [];
  peopleSaved: any = [];

  // Injection de dépendance
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.http
      .get('https://swapi.dev/api/people/')
      .subscribe((data: any) => {
        for (let i = 1; i <= Math.ceil(data.count / 10); i++) {
          this.http
          .get('https://swapi.dev/api/people/?page=' + i)
          .subscribe((data: any) => {
            this.people = this.people.concat(data.results);
            this.peopleSaved = this.peopleSaved.concat(data.results);
          })
        }
      })
  }

  filterByGender(event: any) {
    this.people = this.peopleSaved;
    if (event.target.value === '1') {
      this.people = 
        this.people.filter((p: any) => p.gender === 'male');
    } else if (event.target.value === '2') {
      this.people = 
        this.people.filter((p: any) => p.gender === 'female' );
    } else if (event.target.value === '3') {
      this.people = 
        this.people.filter((p: any) => p.gender === 'n/a' );
    } else if (event.target.value === '4') {
      this.people = 
        this.people.filter((p: any) => p.gender === 'hermaphrodite' );
    }
  }
}
