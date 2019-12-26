import mongoose from "mongoose";
import config from "./config";

mongoose.connect(config.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

export default mongoose;
