import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProfileCardComponent } from '../challenges/profile-card/profile-card.component';
import { AddToBagComponent } from '../challenges/add-to-bag/add-to-bag.component';
import { MobileNavigationComponent } from '../challenges/mobile-navigation/mobile-navigation.component';
import { ContactUsComponent } from '../challenges/contact-us/contact-us.component';
import { RecipeComponent } from '../challenges/recipe/recipe.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    ProfileCardComponent,
    AddToBagComponent,
    MobileNavigationComponent,
    ContactUsComponent,
    RecipeComponent,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = '';
  @Input() content: string = '';
  @Output() modalClosed = new EventEmitter<void>();

  closeModal() {
    this.isOpen = false;
    this.modalClosed.emit();
  }
}
