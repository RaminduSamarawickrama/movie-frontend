import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  constructor() { }

  @Input()
  movie : any;

  ngOnInit(): void {
    console.log('movie', this.movie);
  }

}
