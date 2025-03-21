export interface GlobalUser {
    id: string;
    name: string;
    photo: string;
}

export interface Student extends GlobalUser {
    deficiency: string;
    assistive_technology: string;
    registration: string;
    course: string;
}

export interface Professional extends GlobalUser {
    profission: string;
}

export interface UnitManager extends GlobalUser {
    unit: string;
}

export type UserType = Student | Professional | UnitManager;