import express from "express";
import cors from "cors";
import "dotenv/config";
import "./db/connection.js";
// Routes
import employeeRoutes from "./routes/employee.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors({
  origin: process.env.CLIENT,
  credentials: true
}));
app.use(express.json());
// Routes
app.use("/api/employees", employeeRoutes);

// Start Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});