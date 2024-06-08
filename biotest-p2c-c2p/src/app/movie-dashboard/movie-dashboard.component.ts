import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent {
  myFavoriteMovies = [ 
    'Star Wars: Episode IV - A New Hope', 
    'The Accountant', 
    "Harry Potter and the Sorcerer's Stone" 
  ];



}
