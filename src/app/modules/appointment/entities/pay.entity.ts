export interface PayModel {
    id_pay: Number | null;
    payment_method: String;
    card_name: String;
    card_number: Number;
    expiration_month: Number;
    expiration_year: Number;
    security_code: Number;
    status_pay: String;
}

export interface CreatePayDto extends Omit<PayModel, 'id_pay'>{}

export interface UpdatePayDto extends Partial<PayModel>{}