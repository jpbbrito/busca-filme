import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../movies.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  moviesFounds: any[];
  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit() {
  }
  filterMovie(event: any) {
    /*this.router.navigateByUrl('/detail');*/ 
    if (event.target.value.length < 3) {
      return this.moviesFounds = [{ title: 'Carregando...'}];
    }
    console.log(event.target.value);
    return this.moviesService.searchMovie(event.target.value).subscribe((response: any) => {
      this.moviesFounds = response.results;
      console.log(this.moviesFounds);
    }, (error: any) => {
      console.log(error);
    });
  }
}
