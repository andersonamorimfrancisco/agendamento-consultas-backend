require("dotenv").config();

export default {
  mongoURI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-gqaod.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`
};
