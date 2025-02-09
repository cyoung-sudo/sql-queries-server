import express from "express";
import cors from "cors";
import "dotenv/config";
import "./db/connection.js";
// Routes
import employeeRoutes from "./routes/employee.js";
import clockinRoutes from "./routes/clockin.js";
import resultRoutes from "./routes/result.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors({
  origin: process.env.CLIENT,
  credentials: true
}));
app.use(express.json());
// Routes
app.use("/api/employees", employeeRoutes);
app.use("/api/clockins", clockinRoutes);
app.use("/api/results", resultRoutes);

// Start Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});