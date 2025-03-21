import { Component, Input, Output, EventEmitter, HostListener, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'app-filter',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonComponent],
    templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit, OnChanges {
    @Input() placeholder: string = 'Selecione uma Unidade';
    @Input() options: string[] = [];
    @Input() selectedOption: string = '';
    @Output() optionSelected = new EventEmitter<string>();
    @Output() userTypeSelected = new EventEmitter<string>();

    isOpen: boolean = false;
    searchText: string = '';
    filteredOptions: string[] = [];
    selectedButton: string = 'Alunos';

    ngOnInit(): void {
        this.filteredOptions = [...this.options];
    }

    ngOnChanges(): void {
        this.filteredOptions = [...this.options];
    }

    toggleDropdown(): void {
        this.isOpen = !this.isOpen;

        if (this.isOpen) {
            this.searchText = '';
            this.filteredOptions = [...this.options];
        }
    }

    filterOptions(): void {
        if (!this.searchText.trim()) {
            this.filteredOptions = [...this.options];
            return;
        }

        const search = this.searchText.toLowerCase().trim();
        this.filteredOptions = this.options.filter(option =>
            option.toLowerCase().includes(search)
        );
    }

    selectOption(option: string): void {
        this.selectedOption = option;
        this.optionSelected.emit(option);
        this.isOpen = false;
    }

    selectButton(button: string): void {
        this.selectedButton = button;
        this.userTypeSelected.emit(button);
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
        const element = event.target as HTMLElement;
        if (!element.closest('app-filter')) {
            this.isOpen = false;
        }
    }
}
