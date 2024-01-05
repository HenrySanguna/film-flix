import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() dataTv: any[] = [];
  @Input() tituloCarousel: string = '';
  data = {};

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    
  }

  getDetails(id: number){
    this.apiService.getDetailTv(id).subscribe((data) => {
      this.data = data;
    });
  }
}
