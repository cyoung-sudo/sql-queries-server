import express from "express";
import { connection } from "../db/connection.js";

const clockinRoutes = express.Router();

clockinRoutes.route("/")
//----- Retrieve clockins
.get((req, res) => {
  let sql = "SELECT * FROM clockins";

  connection.query(sql)
  .then(clockins => {
    res.json({
      clockins: clockins[0]
    });
  })
  .catch(err => console.log(err));
})
//----- Add/Update clockin
.post((req, res) => {
  let currentDate = new Date().toISOString().slice(0, 10);

  let sql = "INSERT INTO clockins (eID, clockins, lastClockin) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE clockins = clockins + 1, lastClockin = ?";
  let sqlVals = [req.body.eID, 1, currentDate, currentDate];

  connection.query(sql, sqlVals)
  .then(res2 => {
    res.json({
      success: true
    });
  })
  .catch(err => console.log(err));
});

export default clockinRoutes;