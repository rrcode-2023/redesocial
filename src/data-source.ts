import mongoose, { ConnectOptions } from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.MONGODB_URL!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("MongoDB connected successfully");
});
