export interface SpecialityModel {
    id_speciality: Number | null;
    name_speciality: string;
    description_speciality: string;
}

export interface CreateSpecialityDto extends Omit<SpecialityModel, 'id_speciality'>{}

export interface UpdateSpecialityDto extends Partial<SpecialityModel>{}