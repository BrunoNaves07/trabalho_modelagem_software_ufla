import { City } from '../entities/city';
import { CityNotFoundError } from '../errors/city-not-found.error';
import { CityRepository } from './protocols/city-repository';
import haversine from 'src/domain/services/distance-haversine-service';

export class SearchCityService {
  constructor(private readonly cityRepo: CityRepository) {}

  async search(query: string): Promise<City[]> {
    if (!query || query.trim().length < 3) {
      return [];
    }

    const cities = await this.cityRepo.getAll();

    const filteredCities = cities.filter(
      (item) => item.name.toLowerCase().indexOf(query.toLowerCase()) > -1
    );

    if (filteredCities.length == 0) {
      throw new CityNotFoundError();
    }

    return filteredCities;
  }

  async distanceHaversine(lat, long): Promise<City> {
    const cities = await this.cityRepo.getAll();

    let menor = 99999999999999;
    let haver;
    let i = 0;
    let index = 0;
    const cidades = [];

    for await(let _city of cities) {
      haver = haversine({latitude: lat, longitude: long}, {latitude: _city.coord.latitude, longitude: _city.coord.longitude});

      if (haver <= menor){
        menor = haver;
        i = index;
        cities[i];
        //cidades.push(cities[i]);
      }
      index++;
    }

    for(let i = cidades.length; i > 3; i--) {
      cidades.shift();
    }

    const city = cities[i];
    //return cidades;
    return city;
  }
}
