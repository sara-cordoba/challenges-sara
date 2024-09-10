import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-bag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-to-bag.component.html',
  styleUrl: './add-to-bag.component.scss',
})
export class AddToBagComponent {
  selectedSize = 36;
  expandedImgUrl: string = 'assets/add-to-bag/psyduck.png';
  products = [
    {
      name: 'Psyduck',
      img: 'assets/add-to-bag/psyduck.png',
    },
    {
      name: 'Evee',
      img: 'assets/add-to-bag/evee.png',
    },
    {
      name: 'Pikachu',
      img: 'assets/add-to-bag/pikachu.png',
    },
  ];

  selectSize(size: number): void {
    this.selectedSize = size;
  }

  openImg(img: string): void {
    this.expandedImgUrl = img;
  }
}
