import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define interfaces for type safety
interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  skills: string[];
  link?: string;
  linkIcon?: string;
  linkText?: string;
}

interface Category {
  name: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  expanded: boolean;
  items: ExperienceItem[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  // Array of experience categories
  categories: Category[] = [
    {
      name: 'Front-End',
      icon: 'fa-code',
      shortDescription: 'Building responsive user interfaces and web applications',
      fullDescription: 'My front-end development experience focuses on creating responsive, accessible, and performant user interfaces. I specialize in modern JavaScript frameworks and libraries, with a focus on clean code and component-based architecture.',
      expanded: false,
      items: [
        {
          title: 'Frontend Developer',
          organization: 'Self-Employed',
          period: 'January 2023 - Present',
          description: 'Developed responsive web applications using Angular and TypeScript. Implemented modern UI/UX designs and optimized for performance across devices.',
          skills: ['Angular', 'TypeScript', 'SCSS', 'RxJS', 'Responsive Design'],
          link: 'https://github.com/stefand799/stefan-coder',
          linkIcon: 'fa-github',
          linkText: 'View Project'
        },
        {
          title: 'Portfolio Website',
          organization: 'Personal Project',
          period: 'February 2024',
          description: 'Created a personal portfolio website to showcase skills and experience using modern web technologies and responsive design principles.',
          skills: ['Angular', 'CSS3', 'HTML5', 'Git', 'Component Design'],
          link: 'https://github.com/stefand799/stefan-coder',
          linkIcon: 'fa-github',
          linkText: 'View Repository'
        }
      ]
    },
    {
      name: 'Back-End',
      icon: 'fa-server',
      shortDescription: 'Designing APIs, services, and server-side applications',
      fullDescription: 'My back-end development experience includes building robust APIs, microservices, and server-side applications. I focus on creating scalable, maintainable, and secure systems that power modern web applications.',
      expanded: false,
      items: [
        {
          title: 'RESTful API Development',
          organization: 'Personal Project',
          period: 'March 2023 - May 2023',
          description: 'Designed and implemented RESTful APIs using Node.js and Express, with a focus on performance and security. Integrated with MongoDB for data persistence.',
          skills: ['Node.js', 'Express', 'MongoDB', 'REST API', 'JWT Authentication'],
          link: 'https://github.com/stefand799',
          linkIcon: 'fa-github',
          linkText: 'View Projects'
        }
      ]
    },
    {
      name: 'AI & ML',
      icon: 'fa-brain',
      shortDescription: 'Creating intelligent systems and machine learning models',
      fullDescription: 'My work in artificial intelligence and machine learning focuses on creating practical solutions to real-world problems. I have experience with various ML frameworks and techniques, with a particular interest in computer vision and natural language processing.',
      expanded: false,
      items: [
        {
          title: 'Machine Learning Engineer',
          organization: 'Research Project',
          period: 'October 2023 - December 2023',
          description: 'Implemented machine learning models for image recognition using TensorFlow and Keras. Achieved 92% accuracy on the test dataset after fine-tuning.',
          skills: ['Python', 'TensorFlow', 'Keras', 'Computer Vision', 'Data Preprocessing'],
          link: 'https://github.com/stefand799',
          linkIcon: 'fa-github',
          linkText: 'View Project'
        }
      ]
    },
    {
      name: 'DevOps',
      icon: 'fa-cogs',
      shortDescription: 'Automating deployment, scaling, and operations',
      fullDescription: 'My DevOps experience includes automating build and deployment pipelines, container orchestration, and infrastructure management. I focus on creating efficient workflows that enable continuous integration and delivery.',
      expanded: false,
      items: [
        {
          title: 'CI/CD Pipeline Implementation',
          organization: 'Self-Employed',
          period: 'June 2023 - August 2023',
          description: 'Set up CI/CD pipelines using GitHub Actions for automated testing and deployment of web applications. Implemented Docker containerization for consistent environments.',
          skills: ['Docker', 'GitHub Actions', 'CI/CD', 'Shell Scripting', 'AWS'],
          link: 'https://github.com/stefand799',
          linkIcon: 'fa-github',
          linkText: 'View Repositories'
        }
      ]
    },
    {
      name: 'IoT & Embedded',
      icon: 'fa-microchip',
      shortDescription: 'Building connected devices and embedded systems',
      fullDescription: 'My work with IoT and embedded systems involves creating solutions that bridge the physical and digital worlds. I specialize in sensor integration, low-power systems, and secure communication protocols.',
      expanded: false,
      items: [
        {
          title: 'Smart Home Automation',
          organization: 'Personal Project',
          period: 'July 2023 - Present',
          description: 'Designed and built a home automation system using ESP32 microcontrollers and MQTT protocol. Implemented features like remote monitoring and control of household appliances.',
          skills: ['C/C++', 'ESP32', 'MQTT', 'Embedded Systems', 'IoT Protocols'],
          link: 'https://github.com/stefand799',
          linkIcon: 'fa-github',
          linkText: 'View Project'
        }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: 'fa-shield-alt',
      shortDescription: 'Protecting systems, networks, and data from attacks',
      fullDescription: 'My cybersecurity experience focuses on identifying vulnerabilities, implementing secure coding practices, and deploying defense mechanisms to protect critical systems and data.',
      expanded: false,
      items: [
        {
          title: 'Security Analyst',
          organization: 'Self-Study',
          period: 'September 2023 - Present',
          description: 'Conducted security assessments and vulnerability scanning of web applications. Implemented secure coding practices and performed code reviews to identify potential security issues.',
          skills: ['Penetration Testing', 'OWASP', 'Secure Coding', 'Network Security', 'Encryption'],
          link: 'https://github.com/stefand799',
          linkIcon: 'fa-github',
          linkText: 'View Projects'
        }
      ]
    }
  ];

  // Toggle the expanded state of a card
  toggleCard(index: number, event?: MouseEvent): void {
    // If event is provided (from close button), stop propagation
    if (event) {
      event.stopPropagation();
    }
    
    // Close any currently expanded card
    this.categories.forEach((category, i) => {
      if (i !== index) {
        category.expanded = false;
      }
    });
    
    // Toggle the clicked card
    this.categories[index].expanded = !this.categories[index].expanded;
    
    // If a card is expanded, add a class to the body to prevent scrolling
    if (this.categories[index].expanded) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }
}