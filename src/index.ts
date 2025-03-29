import express from "express";
import cors from "cors";
import router from "@routes/routes";
import connectDB from "@config/db";
import "dotenv/config";
import errorHandler from "@middlewares/errorHandler";

const app = express();

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not set in the environment variables");
}

const MONGODB_URI: string = process.env.MONGODB_URI;
connectDB(MONGODB_URI);

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use("/api", router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server Running");
});
