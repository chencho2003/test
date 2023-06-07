import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json());
// app.use(cors())
app.use(
  cors({
    origin:
      "mysql://root:M0B25CpqaBKZLeT2j5je@containers-us-west-120.railway.app:5849/railway",
    credentials: true,
  })
);

app.use("/", userRoutes);

app.listen(8800);
