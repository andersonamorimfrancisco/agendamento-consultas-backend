import express from "express";
import middlewares from "./middlewares";
import routes from "./routes";
import { app as log } from "./utils/log";

const app = express();

middlewares(app);
routes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => log(`listen port ${PORT}`));
