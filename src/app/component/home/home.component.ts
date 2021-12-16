import { Component, OnInit } from '@angular/core';
import {MovieDataService} from "../../service/movie-data-service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private movieDataService : MovieDataService) { }

    showList : any;
    movieName : string;

  ngOnInit(): void {

  }

  onClickSearchBtn(name : string){
    if(name == undefined || name ==''){
      alert('Enter a movie name !')
    }else{
      this.setMovieList(name);
    }
  }

  setMovieList(show : string){
    this.movieDataService.getShowsByName(show).subscribe(data =>{
      this.showList = data;
      console.log(data);
    })
  }
}
