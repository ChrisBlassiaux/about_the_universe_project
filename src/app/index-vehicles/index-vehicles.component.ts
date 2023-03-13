import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-index-vehicles',
  templateUrl: './index-vehicles.component.html',
  styleUrls: ['./index-vehicles.component.scss']
})
export class IndexVehiclesComponent {
  vehicles: any = [];
  vehiclesSaved: any = [];

  // Injection de dépendance
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles() {
    this.http
    .get('https://swapi.dev/api/vehicles/')
    .subscribe((data: any) => {
      for (let i = 1; i <= Math.ceil(data.count / 10); i++) {
        this.http
        .get('https://swapi.dev/api/vehicles/?page=' + i)
        .subscribe((data: any) => {
          this.vehicles = this.vehicles.concat(data.results);
          this.vehiclesSaved = this.vehiclesSaved.concat(data.results);
        })
      }
    })
  }

  filterByPrice(event: any) {
    this.vehicles = this.vehiclesSaved;
    if (event.target.value === '1') {
      this.vehicles = 
        this.vehicles.filter((vehicle: any) => vehicle.cost_in_credits < 10000);
    } else if (event.target.value === '2') {
      this.vehicles = 
        this.vehicles.filter((vehicle: any) => {
          return vehicle.cost_in_credits >= 10000 && vehicle.cost_in_credits < 100000
        });
    } else if (event.target.value === '3') {
      this.vehicles = 
        this.vehicles.filter((vehicle: any) => {
          return vehicle.cost_in_credits >= 100000
        });
    }
  }
}
