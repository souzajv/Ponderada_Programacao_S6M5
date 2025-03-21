import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() py: string = "0";
  @Input() px: string = "0";
  @Input() width: string = "100%";
  @Input() height: string = "100%";
}
