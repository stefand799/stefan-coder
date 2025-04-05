import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { EducationComponent } from "./components/education/education.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent, HomePageComponent, AboutMeComponent, EducationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stefan-coder';
}
