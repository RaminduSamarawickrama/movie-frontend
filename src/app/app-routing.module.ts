import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./component/home/home.component";
import {TrendingComponent} from "./component/trending/trending.component";
import {ShowDetailsComponent} from "./component/show-details/show-details.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'trending', component: TrendingComponent},
  {path: 'shows/:id/:type', component: ShowDetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
