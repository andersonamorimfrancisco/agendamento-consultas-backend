import { Router, Application } from "express";

import patient from "./patient";

export default (app: Application) => {
  const router = Router();

  router.use("/patient", patient());

  app.use(router);
};
