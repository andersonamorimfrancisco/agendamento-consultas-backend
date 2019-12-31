import { appointmentModel } from "../models";
import { Appointment as AppointmentType } from "../types";

interface SetPatient {
  appointmentId: string;
  patientId: string;
}

interface FixPatient {
  hour: number;
  weekDay: number;
  week: number;
  patientId: string;
}

const create = (appointment: AppointmentType) =>
  appointmentModel.create(appointment);

const list = (filter: any) => appointmentModel.find(filter).populate("patient");

const setPatient = (data: SetPatient) =>
  appointmentModel.updateOne(
    { _id: data.appointmentId },
    { $set: { patient: data.patientId } }
  );

const removePatient = (data: SetPatient) =>
  appointmentModel.updateOne(
    { _id: data.appointmentId },
    { $unset: { patient: 1 } }
  );

const fixPatient = (data: FixPatient) =>
  appointmentModel.updateMany(
    {
      $and: [
        { hour: data.hour, weekDay: data.weekDay },
        { week: { $gte: data.week } }
      ]
    },
    { $set: { fixedPatient: data.patientId } }
  );

const unfixPatient = (data: FixPatient) =>
  appointmentModel.updateMany(
    {
      $and: [
        { hour: data.hour, weekDay: data.weekDay },
        { week: { $gte: data.week } }
      ]
    },
    { $unset: { fixedPatient: 1 } }
  );

export default {
  create,
  list,
  setPatient,
  removePatient,
  fixPatient,
  unfixPatient
};
