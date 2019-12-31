export interface Patient {
  _id?: string;
  name: string;
  phoneNumber: string;
  contactPhoneNumber: string;
}

export interface Appointment {
  hour: number;
  day: number;
  weekDay: number;
  week: number;
  month: number;
  year: number;

  patient?: string;
  fixedPatient?: string;
  date: string;
}
