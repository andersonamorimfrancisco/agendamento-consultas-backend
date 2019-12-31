import mongoose from "../database";

const AppointmentSchema = new mongoose.Schema({
  hour: { type: Number },
  day: { type: Number },
  weekDay: { type: Number },
  week: { type: Number },
  month: { type: Number },
  year: { type: Number },
  date: { type: String },

  patient: { type: mongoose.Types.ObjectId, ref: "Patient", required: false },
  fixedPatient: {
    type: mongoose.Types.ObjectId,
    ref: "Patient",
    required: false
  },
  enable: { type: Boolean, default: true },
  category: { type: String, default: "normal" }
});

export default mongoose.model("Appointment", AppointmentSchema);
