import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
 aboutMeText : string = `
I’m a computer scientist driven by curiosity and a passion for solving problems. I focus on improving systems, making them more efficient, and delivering results that matter. I choose tools and approaches based on what best fits the task, whether established or creative.

I believe knowledge is both a tool for success and a responsibility, so I aim to use it wisely and creatively. I’m skilled in software development, system improvement, and building solutions from the ground up.

Though I prefer working independently, I collaborate well in small or remote teams. I value clear communication and different perspectives, always aiming to create lasting, meaningful solutions.

Outside of tech, I enjoy philosophy, psychology, and music, and I believe the best solutions come from blending logic with creativity.
`;
}
