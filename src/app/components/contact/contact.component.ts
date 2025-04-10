import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  // Contact methods with social links
  contactMethods = [
    {
      title: 'Stack Overflow',
      icon: 'stack-overflow',
      link: 'https://stackoverflow.com/users/30213000/stefan-d799',
      linkText: 'View Profile'
    },
    {
      title: 'LinkedIn',
      icon: 'linkedin-in',
      link: 'https://www.linkedin.com/in/ionel-%C8%99tefan-dinu-97b75131a/',
      linkText: 'Connect'
    },
    {
      title: 'GitHub',
      icon: 'github',
      link: 'https://github.com/stefand799',
      linkText: 'View Projects'
    },
    {
      title: 'Twitter',
      icon: 'twitter',
      link: 'https://x.com/stefan_d799',
      linkText: 'Follow'
    },
    {
      title: 'Resume PDF',
      icon: 'file-pdf',
      link: 'assets/documents/stefan-dinu-resume.pdf', // Make sure to create this folder and add your PDF
      linkText: 'Download CV'
    }
  ];
  
  // Additional social links if needed in the future
  socialLinks = [
    {
      name: 'Email',
      icon: 'envelope',
      link: 'mailto:stefandinu.contact@yahoo.com'
    },
    {
      name: 'Discord',
      icon: 'discord',
      link: '#'
    },
    {
      name: 'Dev.to',
      icon: 'dev',
      link: '#'
    }
  ];
}