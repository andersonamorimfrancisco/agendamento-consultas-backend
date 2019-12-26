import { patientModel } from "../models";
import { Patient as PatientType } from "../types";

const createPatient = (patient: PatientType) => patientModel.create(patient);

const listPatient = () => patientModel.find({});

const removePatient = (_id: string) =>
  patientModel.findOneAndDelete({ _id: _id });

export default {
  createPatient,
  listPatient,
  removePatient
};
