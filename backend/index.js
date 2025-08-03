import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import detenv from "dotenv";
import userRoute from "./routes/user.route.js";
import connectDB from "./utils/db.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

detenv.config({});

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: 'https://nexhire-frontendr.onrender.com/',
  credentials: true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;


// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// Server Start
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
