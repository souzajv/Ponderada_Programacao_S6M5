import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-info',
  imports: [CommonModule],
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.scss',
  standalone: true

})
export class StudentInfoComponent {
  //propriedades do aluno
  @Input() name: string = '';
  @Input() photo: string = '';
  @Input() deficiency: string = '';
  @Input() assistive_technology: string = '';
  @Input() birthday: string = '';
  @Input() phone: string = '';
  @Input() email: string = '';

  //propriedade do responsavel atribuido
  @Input() responsible: string = '';
  @Input() responsible_type: string = '';
  @Input() responsible_email: string = '';
  @Input() responsible_phone: string = '';

  //propriedade do profissional atribuida
  @Input() professional: string = '';
  @Input() professional_type: string = '';
  @Input() professional_email: string = '';
  @Input() professional_phone: string = '';

  modalAberto: boolean = false;

  abrirModal() {
    console.log("modal aberto")
    this.modalAberto = true;
    document.body.style.overflow = "hidden";
  }
  fecharModal() {
    this.modalAberto = false;
    document.body.style.overflow = "auto";
  }
}
