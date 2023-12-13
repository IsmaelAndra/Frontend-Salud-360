export interface ConsultoryModel {
    id_consultory: Number | null;
    name_consultory: String;
    address_consultory: String;
    phone_consultory: Number;
}

export interface CreateConsultoryDto extends Omit<ConsultoryModel, 'id_consultory'>{}

export interface UpdateConsultoryDto extends Partial<ConsultoryModel>{}