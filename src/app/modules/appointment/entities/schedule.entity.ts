export interface ScheduleModel {
    id_schedule: Number | null;
    weekday_schedule: String;
    startime_schedule: String;
    departime_schedule: String;
}

export interface CreateScheduleDto extends Omit<ScheduleModel, 'id_schedule'>{}

export interface UpdateScheduleDto extends Partial<ScheduleModel>{}