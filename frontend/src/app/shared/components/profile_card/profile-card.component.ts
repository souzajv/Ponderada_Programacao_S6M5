import { Component, Input } from '@angular/core';
import { UserType, Student, Professional, UnitManager } from '../../../models/user.model'
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-profile-card',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './profile-card.component.html',
    styleUrl: './profile-card.component.scss'
})
export class ProfileCard {

    @Input() userData!: UserType;

    get student(): Student | null {
        return this.isStudent(this.userData) ? this.userData: null;
    }

    get professional(): Professional | null {
        return this.isProfessional(this.userData) ? this.userData: null;
    }

    get unitManager() : UnitManager | null {
        return this.isUnitManager(this.userData) ? this.userData: null;
    }

    isStudent(user: any): user is Student {
        return 'deficiency' in user && 'course' in user;
    }

    isProfessional(user: any): user is Professional {
        return 'profission' in user;
    }

    isUnitManager(user: any): user is UnitManager {
        return 'unit' in user;
    }
}


