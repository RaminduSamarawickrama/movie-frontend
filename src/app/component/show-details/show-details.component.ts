import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieDataService} from "../../service/movie-data-service";

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  id : any;
  type: any;
  showDetails: any;

  constructor(private activatedRoute: ActivatedRoute, private movieDataService : MovieDataService) {

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.type = this.activatedRoute.snapshot.paramMap.get('type');
    console.log(this.type,' : ',this.id);
    if(this.type === "MOVIE"){
      this.movieDataService.getMovieById(this.id).subscribe(data =>{
        this.showDetails = data;
        console.log(data);
      })
    }else if (this.type === "TVSHOW"){
      this.movieDataService.getTvShowById(this.id).subscribe(data =>{
        this.showDetails = data;
      })
    }
  }


}
