import express from "express";
import { connection } from "../db/connection.js";

const employeeRoutes = express.Router();

employeeRoutes.route("/")
//----- Retrieve employees
.get((req, res) => {
  let sql = "SELECT * FROM employees";

  connection.query(sql)
  .then(employees => {
    res.json({
      employees: employees[0]
    });
  })
  .catch(err => console.log(err));
})
//----- Add employee
.post((req, res) => {
  let sql = "INSERT INTO employees(eID, firstName, lastName, startDate, salary, risk, remote) VALUES(?, ?, ?, ?, ?, ?, ?)";
  let sqlVals = [req.body.eID, req.body.firstName, req.body.lastName, req.body.startDate, req.body.salary, req.body.risk, req.body.remote];

  connection.query(sql, sqlVals)
  .then(res2 => {
    res.json({
      success: true
    })
  })
  .catch(err => console.log(err));
});

export default employeeRoutes;