import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProfileCardComponent } from '../challenges/profile-card/profile-card.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule,ProfileCardComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
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
