import { Component } from '@angular/core';
import { Button, Textbox } from '@shared/ui';

@Component({
  selector: 'app-products',
  imports: [Button, Textbox],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  constructor() {
    console.log('Products component initialized');
  }
}
