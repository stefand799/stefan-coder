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
  activeTab: string = 'technical'; // Default active tab
  
  // Technical skills array organized by category
  skillCategories = [
    {
      name: 'Programming',
      skills: [
        { name: 'C/C++', icon: 'fas fa-code' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'C#', icon: 'fas fa-code'},
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'TypeScript', icon: 'fab fa-js' },
      ]
    },
    {
      name: 'Web Development',
      skills: [
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'Angular', icon: 'fab fa-angular' }
      ]
    },
    {
      name: 'DevOps & Tools',
      skills: [
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'Linux', icon: 'fab fa-linux' }
      ]
    },
    {
      name: 'Specialized',
      skills: [
        { name: 'Cybersecurity', icon: 'fas fa-shield-alt' },
        { name: 'IoT', icon: 'fas fa-microchip' },
        { name: 'Embedded Systems', icon: 'fas fa-microchip' },
        { name: 'System Design', icon: 'fas fa-project-diagram' }
      ]
    }
  ];
  
  // General/soft skills
  generalSkillCategories = [
    {
      name: 'Problem Solving',
      skills: [
        { name: 'Analytical Thinking', icon: 'fas fa-chart-line' },
        { name: 'Critical Thinking', icon: 'fas fa-brain' },
        { name: 'Creative Solutions', icon: 'fas fa-lightbulb' },
        { name: 'Debugging', icon: 'fas fa-bug' },
        { name: 'Research', icon: 'fas fa-search' }
      ]
    },
    {
      name: 'Communication',
      skills: [
        { name: 'Documentation', icon: 'fas fa-book' },
        { name: 'Knowledge Transfer', icon: 'fas fa-chalkboard-teacher' }
      ]
    },
    {
      name: 'Work Approach',
      skills: [
        { name: 'Self-motivated', icon: 'fas fa-rocket' },
        { name: 'Adaptable', icon: 'fas fa-sync-alt' },
        { name: 'Detail-oriented', icon: 'fas fa-search-plus' },
        { name: 'Independent Worker', icon: 'fas fa-user' }
      ]
    },
    {
      name: 'Fields of Interest',
      skills: [
        { name: 'Philosophy', icon: 'fas fa-scroll' },
        { name: 'Psychology', icon: 'fas fa-brain' },
        { name: 'Music', icon: 'fas fa-music' },
        { name: 'Abstract Reasoning', icon: 'fas fa-puzzle-piece' }
      ]
    }
  ];
  
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
  
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}