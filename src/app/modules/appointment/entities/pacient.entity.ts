import { UserModel } from "../../user/entities/user.entity";

export interface PacientModel {
    id_pacient: Number | null;
    identification_pacient: Number;
    name_pacient: string;
    lastname_pacient: string;
    dateofbirth_pacient: Date;
    gender_pacient: string;
    address_pacient: string;
    phone_pacient: Number;
    blood_type_pacient: string;
    user: UserModel;
}

export interface CreatePacientDto extends Omit<PacientModel, 'id_pacient'>{
    id_user: number;
}

export interface UpdatePacientDto extends Partial<PacientModel>{
    id_user: number;
}