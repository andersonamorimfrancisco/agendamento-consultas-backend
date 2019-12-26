import { Router } from "express";
import { patientController } from "../controllers/";

export default () => {
  const router = Router();

  router.post("/create", (req, res) => {
    patientController
      .createPatient(req.body)
      .then(patient => {
        res.json(patient);
      })
      .catch(() => res.json({}));
  });

  router.get("/list", (req, res) => {
    patientController.listPatient().then(patients => res.json(patients));
  });

  router.post("/remove", (req, res) => {
    patientController
      .removePatient(req.body._id)
      .then(patients => res.json(patients));
  });

  return router;
};
