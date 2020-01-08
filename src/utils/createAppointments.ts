import { appointmentModel } from "../models";
import { Appointment } from "../types";

const createAppointment = async (appointment: Appointment) => {
  await appointmentModel.create(appointment);
};
let week = 0;
const createDate = (date: Date) => ({
  hour: date.getHours(),
  day: date.getDate(),
  weekDay: date.getDay(),
  week: week,
  month: date.getMonth(),
  year: date.getFullYear(),
  date: date.toLocaleString()
});

const date = new Date();

date.setDate(29);
date.setMonth(11);
date.setFullYear(2019);

date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);

const start = async () => {
  for (let k = 0; k < 52; k++) {
    week = k;
    for (let j = 0; j < 7; j++) {
      for (let i = 0; i < 24; i++) {
        const newDate = createDate(date);
        await createAppointment(newDate);
        date.setHours(date.getHours() + 1);
      }
      console.log(date.toLocaleString());
    }
  }
};
