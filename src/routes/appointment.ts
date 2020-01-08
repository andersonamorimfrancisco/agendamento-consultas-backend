import { Router } from "express";
import { appointmentController } from "../controllers";
import { router as routerLog } from "../utils/log";

export default () => {
  const router = Router();
  const log = (message: string) => routerLog(`appointment-${message}`);

  router.post("/list", (req, res) => {
    log("list");
    appointmentController
      .list(req.body)
      .then(appointments => res.json(appointments))
      .catch(() => res.json({ error: true }));
  });

  router.post("/setpatient", (req, res) => {
    log("setpatient");
    appointmentController
      .setPatient(req.body)
      .then(appointment => res.json(appointment))
      .catch(() => res.json({ error: true }));
  });

  router.post("/removepatient", (req, res) => {
    log("removepatient");
    appointmentController
      .removePatient(req.body)
      .then(response => res.json(response))
      .catch(() => res.json({ error: true }));
  });

  router.post("/fixpatient", (req, res) => {
    log("fixpatient");
    appointmentController
      .fixPatient(req.body)
      .then((response: any) => res.json(response))
      .catch(() => res.json({ error: true }));
  });

  router.post("/unfixpatient", (req, res) => {
    log("unfixpatient");
    appointmentController
      .fixPatient(req.body)
      .then((response: any) => res.json(response))
      .catch(() => res.json({ error: true }));
  });

  return router;
};
