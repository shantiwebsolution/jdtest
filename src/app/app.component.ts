import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProfitPipe } from './pipes/profit.pipe';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from "./components/search/search.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    preserveWhitespaces: true,
    imports: [
        CommonModule, RouterOutlet,
        NavbarComponent, FooterComponent, HomeComponent, DetailsComponent,
        ProfitPipe, FormsModule,
        SearchComponent
    ]
})
export class AppComponent {

  title = 'movie-app';
  total = 120;
  imgUrl = 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png';
  today = new Date(2023, 5, 6);
  fullName = "Jayesh";
  SetTime() {
    this.today = new Date();
  }
  checkBdate(arg0: any) {
    console.log(arg0);
  }
}
