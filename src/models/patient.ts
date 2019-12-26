import mongoose from "../database";

const PatientSchema = new mongoose.Schema({
  name: { type: String },
  phoneNumber: { type: String },
  contactPhoneNumber: { type: String }
});

export default mongoose.model("Patient", PatientSchema);
