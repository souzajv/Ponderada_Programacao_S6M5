import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-input',
  imports: [CommonModule, NgStyle],
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() label!: string;
  @Input() placeHolder: string = "";
  @Input() type: string = "text";
  @Input() width!: string;
  @Input() height!: string;

  @Output() valueEmitted = new EventEmitter<string>;

  onInputChanges(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.valueEmitted.emit(inputValue);
  }
}
