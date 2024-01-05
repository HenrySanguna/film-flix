import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() idGenre: number | null = null;
  @Input() tituloCarousel: string = '';
  @Input() type: string = '';
  @Input() dataInherit: any[] = [];
  dataGenres: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    if (this.type == 'genres') {
      this.getTvShows(this.idGenre);
    }
  }

  getTvShows(id: number | null) {
    if (id) {
      this.apiService.getDiscoverGenre(id).subscribe((data) => {
        this.dataGenres = data.results;
      });
    }
  }
}
