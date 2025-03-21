import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professional-details',
  imports: [],
  templateUrl: './professional-details.component.html',
  styleUrl: './professional-details.component.scss',
})
export class ProfessionalDetailsComponent {
  professionalId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.professionalId = this.route.snapshot.paramMap.get('id')!;
    console.log('ID do profissional:', this.professionalId);
  }
}
