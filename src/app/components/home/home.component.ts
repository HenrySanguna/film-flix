import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataGenres: any[] = [];
  typeGenres: string = 'genres';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getDiscover();
  }

  getDiscover() {
    this.apiService.getGenreTv().subscribe((data) => {
      this.dataGenres = data.genres;
    });
  }
}
