import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../movies.service';
import { Movie } from '../home/movies.interface';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  baseUrlImage = 'https://image.tmdb.org/t/p';
  sizeImage = '/w185_and_h278_bestv2';
  movie: Movie;
  crew: any;
  cast: any;
  release: string;
  constructor( private activatedRoute: ActivatedRoute, private movieService: MoviesService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.movieService.getMovieById(params.id)
        .subscribe( (response: Movie) => {
            this.movie = response;
            this.movieService.getCast(this.movie.id).subscribe((res: any) => {
              for (const item of res.crew) {
                  if (item.job === 'Director') {
                    this.crew = item;
                  }
              }
              this.cast = res.cast;
            });
        }, (error: any) => {
           console.log(error) ;
        });
    });
  }

}
