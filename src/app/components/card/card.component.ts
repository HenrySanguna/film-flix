import { Component, Input, OnInit } from '@angular/core';
import { TvDetails } from 'src/interfaces/params';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() dataDetails: TvDetails = {
    id: null,
    name: "",
    first_air_date: "",
    genres: [],
    last_air_date: "",
    last_episode_to_air: {},
    number_of_episodes: null,
    number_of_seasons: null,
    overview: "",
    poster_path: "",
    seasons: [],
    status: "",
    vote_average: null
  };

  imgPath: string = '';

  ngOnInit(): void {
  }

}
