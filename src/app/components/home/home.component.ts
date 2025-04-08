import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Quote {
  text: string;
  author: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  quote: string = ''; // This will hold the formatted quote
  quotes: Quote[] = [];
  
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.loadRandomQuote();
  }
  
  loadRandomQuote(): void {
    this.http.get<Quote[]>('data/quotes.json').subscribe({
      next: (data) => {
        this.quotes = data;
        this.setRandomQuote();
      },
      error: (error) => {
        console.error('Error loading quotes:', error);
        // Fallback to default quote if there's an error
        this.quote = '"The future belongs to those who believe in the beauty of their dreams." – Eleanor Roosevelt';
      }
    });
  }
  
  setRandomQuote(): void {
    if (this.quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.quotes.length);
      const selectedQuote = this.quotes[randomIndex];
      this.quote = `${selectedQuote.text} – ${selectedQuote.author}`;
    }
  }
}