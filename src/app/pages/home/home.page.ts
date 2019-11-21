import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../../movies.service';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  movieName: string;
  baseUrlImage = 'https://image.tmdb.org/t/p';
  sizeImage = '/w185_and_h278_bestv2';
  imageBaseLink = `${this.baseUrlImage}${this.sizeImage}`;
  totalPages: number;
  page = 1;
  movies: any[] = [];
  constructor(private moviesService: MoviesService, private router: Router) {
    this.getDatas();
  }

  ngOnInit() {

  }
  getDatas() {
    this.moviesService.getPopularList(this.page).subscribe((response: any) => {
      this.totalPages = response.total_pages;
      this.movies = response.results;
    });
  }
  loadData(event) {
    setTimeout(() => {
    this.page++;
    this.moviesService.getPopularList(this.page)
      .subscribe((response: any) => {
        for ( const item of response.results) {
          this.movies.push(item);
        }
      });
    event.target.complete();

    if (this.page === this.totalPages) {
      event.target.disabled = true;
    }
    }, 1000);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }


}
