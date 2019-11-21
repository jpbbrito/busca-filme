import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Movie } from './pages/home/movies.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly api4 = 'https://api.themoviedb.org/4';
  private readonly api3 = 'https://api.themoviedb.org/3';
  private readonly apiKey = environment.APIKEY;

  constructor(private http: HttpClient) { }


  getPopularList(page: number) {
      return this.http.get<Movie[]>(`${this.api3}/movie/popular?api_key=${this.apiKey}&language=pt-BR&page=${page}`);
  }
  searchMovie(movie: string) {
    return this.http.get<Movie[]>(`${this.api3}/search/movie?api_key=${this.apiKey}&language=pt-BR&page=1&query=${movie}`);
  }
  getMovieById(id: string) {
    return this.http.get<Movie>(`${this.api3}/movie/${id}?api_key=${this.apiKey}&language=pt-BR`);

  }
}
