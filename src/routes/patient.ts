import { Router } from "express";
import { patientController } from "../controllers/";
import { router as routerLog } from "../utils/log";

export default () => {
  const router = Router();
  const log = (message: string) => routerLog(`patient-${message}`);

  router.post("/create", (req, res) => {
    log("create");
    patientController
      .createPatient(req.body)
      .then(patient => {
        res.json(patient);
      })
      .catch(() => res.json({}));
  });

  router.get("/list", (req, res) => {
    log("list");
    patientController.listPatient().then(patients => res.json(patients));
  });

  router.post("/remove", (req, res) => {
    log("remove");
    patientController
      .removePatient(req.body._id)
      .then(patients => res.json(patients));
  });

  return router;
};
