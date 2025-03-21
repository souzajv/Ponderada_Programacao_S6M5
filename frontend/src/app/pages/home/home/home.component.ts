import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from '../../../shared/components/filter/filter.component';
import { ProfileCard } from '../../../shared/components/profile_card/profile-card.component';
import { UserType, Student, Professional, UnitManager } from '../../../models/user.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, FilterComponent, ProfileCard],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title: string = 'Gallaudet';

  unidades: string[] = ['ETEC Teste 1', 'ETEC Teste 2', 'ETEC Teste 3', 'ETEC Teste 4', 'ETEC Teste 5'];
  unidadeSelecionada: string = '';

  onUnidadeSelected(unidade: string): void {
    this.unidadeSelecionada = unidade;
    console.log('Unidade selecionada:', unidade);
  }

  searchText: string = '';
  selectedUserType: string = 'Alunos';

  profiles: UserType[] = [
    {
      id: '1',
      name: 'Nome do Aluno 1',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      deficiency: 'Deficiência 1',
      assistive_technology: 'Tecnologia Assistiva 1',
      registration: 'Matrícula 1',
      course: 'Curso 1'
    } as Student,

    {
      id: '2',
      name: 'Nome do Aluno 2',
      photo: 'https://randomuser.me/api/portraits/men/2.jpg',
      deficiency: 'Deficiência 2',
      assistive_technology: 'Tecnologia Assistiva 2',
      registration: 'Matrícula 2',
      course: 'Curso 2'
    } as Student,

    {
      id: '3',
      name: 'Nome do Aluno 3',
      photo: 'https://randomuser.me/api/portraits/men/3.jpg',
      deficiency: 'Deficiência 3',
      assistive_technology: 'Tecnologia Assistiva 3',
      registration: 'Matrícula 3',
      course: 'Curso 3'
    } as Student,

    {
      id: '4',
      name: 'Nome do Profissional 4',
      photo: 'https://randomuser.me/api/portraits/men/4.jpg',
      profission: 'Engenheiro de Software'
    } as Professional,

    {
      id: '5',
      name: 'Nome do Profissional 5',
      photo: 'https://randomuser.me/api/portraits/men/5.jpg',
      profission: 'Engenheiro de Software'
    } as Professional,

    {
      id: '6',
      name: 'Nome do Profissional 6',
      photo: 'https://randomuser.me/api/portraits/men/6.jpg',
      profission: 'Engenheiro de Software'
    } as Professional,

    {
      id: '7',
      name: 'Nome do Profissional 7',
      photo: 'https://randomuser.me/api/portraits/men/7.jpg',
      profission: 'Engenheiro de Software'
    } as Professional,

    {
      id: '8',
      name: 'Nome do Gerente 8',
      photo: 'https://randomuser.me/api/portraits/men/8.jpg',
      unit: 'Unidade 8'
    } as UnitManager,

    {
      id: '9',
      name: 'Nome do Gerente 9',
      photo: 'https://randomuser.me/api/portraits/men/9.jpg',
      unit: 'Unidade 9'
    } as UnitManager,

    {
      id: '10',
      name: 'Nome do Gerente 10',
      photo: 'https://randomuser.me/api/portraits/men/10.jpg',
      unit: 'Unidade 10'
    } as UnitManager,

    {
      id: '11',
      name: 'Nome do Gerente 11',
      photo: 'https://randomuser.me/api/portraits/men/11.jpg',
      unit: 'Unidade 11'
    } as UnitManager,

    {
      id: '12',
      name: 'Nome do Gerente 12',
      photo: 'https://randomuser.me/api/portraits/men/12.jpg',
      unit: 'Unidade 12'
    } as UnitManager,

    {
      id: '13',
      name: 'Nome do Gerente 13',
      photo: 'https://randomuser.me/api/portraits/men/13.jpg',
      unit: 'Unidade 13'
    } as UnitManager,
  ];

  constructor(private cdr: ChangeDetectorRef) { }

  get filteredProfiles(): UserType[] {
    let filtered = this.profiles.filter(profile =>
      profile.name.toLowerCase().includes(this.searchText.toLowerCase())
    );

    switch (this.selectedUserType) {
      case 'Alunos':
        return filtered.filter(profile => profile.hasOwnProperty('course'));
      case 'Profissionais':
        return filtered.filter(profile => profile.hasOwnProperty('profission'));
      case 'Gerentes':
        return filtered.filter(profile => profile.hasOwnProperty('unit'));
      default:
        return filtered;
    }
  }

  onUserTypeSelected(userType: string) {
    this.selectedUserType = userType;
    this.cdr.detectChanges();
  }
}
