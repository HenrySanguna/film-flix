import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Params, TvDetails } from '../../../interfaces/params';

@Component({
  selector: 'app-detalle',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  params: Params = {
    id: null,
  };
  data: TvDetails = {
    id: null,
    name: '',
    first_air_date: '',
    genres: [],
    last_air_date: '',
    last_episode_to_air: {},
    number_of_episodes: null,
    number_of_seasons: null,
    overview: '',
    poster_path: '',
    seasons: [],
    status: '',
    vote_average: null,
  };

  temporadas: string = "Temporadas";
  typeSeasons: string = "seasons"

  constructor(private _route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this._route.params.subscribe((param) => {
      this.params = param as Params;
    });
    this.getDetails(this.params.id);
  }

  getDetails(id: number | null) {
    if (id) {
      this.apiService.getDetailTv(id).subscribe((data) => {
        this.data = data as TvDetails;
      });
    }
  }
}
