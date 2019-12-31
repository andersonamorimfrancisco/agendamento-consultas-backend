import { Router } from "express";
import { appointmentController } from "../controllers";

export default () => {
  const router = Router();

  router.post("/list", (req, res) => {
    appointmentController
      .list(req.body)
      .then(appointments => res.json(appointments))
      .catch(() => res.json({ error: true }));
  });

  router.post("/setpatient", (req, res) => {
    appointmentController
      .setPatient(req.body)
      .then(appointment => res.json(appointment))
      .catch(() => res.json({ error: true }));
  });

  router.post("/fixpatient", (req, res) => {
    appointmentController
      .fixPatient(req.body)
      .then((response: any) => res.json(response))
      .catch(() => res.json({ error: true }));
  });

  return router;
};
