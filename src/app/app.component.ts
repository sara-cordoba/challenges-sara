import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalComponent, CommonModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'challenges-sara';
  isModalOpen = false;
  modalTitle = '';
  modalContent = '';

  challenges = [
    {
      title: 'Profile Card',
      day: 'Day 1',
      description: 'Create a profile card with animations and stylish layout.',
      content: 'Detailed content of the Profile Card challenge...',
      image: 'assets/profile-card/front-card.png',
    },
    {
      title: 'Add To Bag',
      day: 'Day 2',
      description: 'Develop an Add To Bag button with interactive feedback.',
      content: 'Detailed content of the Add To Bag challenge...',
      image: 'assets/add-to-bag/profile-add.png',
    },
    {
      title: 'Mobile Navigation',
      day: 'Day 3',
      description:
        'Implement a mobile navigation menu with smooth transitions.',
      content: 'Detailed content of the Mobile Navigation challenge...',
      image: 'assets/mobile-navigation/card-doctor.png',
    },
    {
      title: 'Contact Us',
      day: 'Day 4',
      description:
        'Build a Contact Us form with validation and user-friendly UI.',
      content: 'Detailed content of the Contact Us challenge...',
      image: 'assets/contact-us/profile-card-contact.png',
    },
    {
      title: 'Recipe',
      day: 'Day 5',
      description:
        'Create a recipe page with organized layout and clear instructions.',
      content: 'Detailed content of the Recipe challenge...',
      image: 'assets/recipe/profile-recipe.png',
    },
    {
      title: 'Image Carousel',
      day: 'Day 6',
      description:
        'Design an image carousel with smooth animations and controls.',
      content: 'Detailed content of the Image Carousel challenge...',
    },
  ];

  openChallenge(title: string, content: string) {
    this.modalTitle = title;
    this.modalContent = content;
    this.isModalOpen = true;
  }

  onModalClosed() {
    this.isModalOpen = false;
  }
}
