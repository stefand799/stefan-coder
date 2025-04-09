import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Quote {
  text: string;
  author: string;
}

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
 aboutMeText : string = `
I'm a computer scientist driven by curiosity and a passion for solving problems. I focus on improving systems, making them more efficient, and delivering results that matter. I choose tools and approaches based on what best fits the task, whether established or creative.

I believe knowledge is both a tool for success and a responsibility, so I aim to use it wisely and creatively. I'm skilled in software development, system improvement, and building solutions from the ground up.

Though I prefer working independently, I collaborate well in small or remote teams. I value clear communication and different perspectives, always aiming to create lasting, meaningful solutions.

Outside of tech, I enjoy philosophy, psychology, and music, and I believe the best solutions come from blending logic with creativity.
`;

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
        this.quote = '"An idiot admires complexity, a genius admires simplicity." – Terry Davis';
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