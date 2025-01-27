import express from "express";
import { connection } from "../db/connection.js";

const resultRoutes = express.Router();

resultRoutes.route("/")
//----- Retrieve results
.post((req, res) => {
  connection.query(req.body.query)
  .then(employees => {
    res.json({
      success: true,
      employees: employees[0]
    });
  })
  .catch(err => console.log(err));
});

export default resultRoutes;