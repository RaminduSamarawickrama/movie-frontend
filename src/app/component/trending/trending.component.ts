import { Component, OnInit } from '@angular/core';
import {MovieDataService} from "../../service/movie-data-service";

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  constructor(private movieDataService : MovieDataService) { }

  showsList : any ;
  ngOnInit(): void {
    this.movieDataService.getTrendingShows().subscribe(data =>{
      this.showsList = data.result;
      console.log(this.showsList.result, ' ', typeof this.showsList);
    })
  }
}
