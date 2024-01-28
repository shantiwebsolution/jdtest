import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DetailsMoviesComponent } from '../details-movies/details-movies.component';
import { DetailsReviewsComponent } from '../details-reviews/details-reviews.component';
import { DetailsActorsComponent } from '../details-actors/details-actors.component';
import { ProfitPipe } from '../../pipes/profit.pipe';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailsActorsComponent, DetailsMoviesComponent, DetailsReviewsComponent, ProfitPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit {
  total = 1200;

  ngAfterViewInit(): void {
    console.log('Method ngAfterViewInit implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method ngOnChanges implemented.');
  }
  ngAfterContentChecked(): void {
    console.log('Method ngAfterContentChecked implemented.');
  }
  ngAfterContentInit(): void {
    console.log('Method ngAfterContentInit implemented.');
  }
  ngOnInit(): void {
    console.log('Method ngOnInit implemented.');
  }

}
