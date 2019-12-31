import { Router, Application } from "express";

import patient from "./patient";
import appointment from "./appointment";

export default (app: Application) => {
  const router = Router();

  router.use("/patient", patient());
  router.use("/appointment", appointment());

  app.use(router);
};
