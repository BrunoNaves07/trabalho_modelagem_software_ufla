import { City } from './../../../../domain/entities/city';
import { Router } from '@angular/router';
import { SearchCityService } from './../../../../domain/services/search-city.service';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-my-geolocation',
  templateUrl: './my-geolocation.component.html',
  styleUrls: ['./my-geolocation.component.scss'],
})
export class MyGeolocationComponent implements OnInit {

  constructor(private geolocation: Geolocation,
    private readonly searchService: SearchCityService,
    private readonly router: Router) { }

  city: City;
  cities: City[];

  ngOnInit() {
  }

  buscaCidade() {
    this.geolocation.getCurrentPosition().then(async (resp) => {
      this.city = await this.searchService.distanceHaversine(resp.coords.latitude, resp.coords.longitude);
      this.router.navigateByUrl(`/weather/${this.city.id}`);
      //this.cities = await this.searchService.distanceHaversine(resp.coords.latitude, resp.coords.longitude);
      //return this.cities;
    }).catch((error) => {
      console.log('Error getting location', error);
    })
  }

  onSelectCity(cityId: string) {
    this.router.navigateByUrl(`/weather/${cityId}`);
  }

}
