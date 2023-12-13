export interface RolModel {
    id_rol: Number | null;
    namerol: String;
    description_rol: String;
}

export interface CreateRolDto extends Omit<RolModel, 'id_rol'>{}

export interface UpdateRolDto extends Partial<RolModel>{}