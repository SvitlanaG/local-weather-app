import { ICurrentWeather } from './../interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor() {this.current = {
    city: 'Berlin', 
    country: 'Germany', 
    date: new Date(),
    image: 'assets/img/IMG_6369.JPG', 
    temperature: 32,
    description: 'sunny',
  } as ICurrentWeather}

  ngOnInit(): void {
  }

}
