const Joi = require("joi");

const express = require("express");
const res = require("express/lib/response");
const app = express();

const staffs = [
  { id: 001, name: "Oluchi" },
  { id: 002, name: "Ayodele" },
  { id: 003, name: "Nnaemeka" },
  { id: 004, name: "Seun" },
];

app.get("/", (req, res) => {
  res.send("Hello Oluchi");
});

app.get("/api/staffs", (req, res) => {
  res.send(staffs);
});

app.get("/api/staffs/:id", (req, res) => {
  const staff = staffs.find((s) => s.id === parseInt(req.params.id));

  if (!staff)
    res.status(404).send("Staff with id " + req.params.id + " not found");
  res.send(staff);
});

app.post("/api/staffs", (req, res) => {
  const schema = {
    name: Joi.string().min(3).max(8).required(),
  };

  const result = Joi.validate(req.body, schema);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const newstaff = { id: staffs.lenght + 1, name: req.body.name };

  staffs.push(newstaff);
  res.send(staffs);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => "server is listening on PORT " + PORT);
