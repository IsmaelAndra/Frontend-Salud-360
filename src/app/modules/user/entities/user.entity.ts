export interface UserModel {
    id_user: Number | null;
    photo_user: String;
    name_user: String;
    username: String;
    lastname_user: String;
    dateofbirth_user: Date;
    gender_user: String;
    address_user: String;
    phone_user: Number;
    email_user: String;
    password: String;
    pass_verification_user: String;
}

export interface CreateUserDto extends Omit<UserModel, 'id_user'>{
    id_rol?: number;
}

export interface UpdateUserDto extends Partial<UserModel>{
    id_rol?: number;
}