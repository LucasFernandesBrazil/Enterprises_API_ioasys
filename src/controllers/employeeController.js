import employees from "../models/Employee.js";
import employee from "../models/Employee.js";

class employeeController {
  static employeeList = (req, res) => {
    employee.find((err, employee) => {
      res.status(200).json(employee);
    });
  };

  static employeeListByID = (req, res) => {
    const id = req.params.id;
    employee.findById(id, (err, employee) => {
      if (!err) {
        res.status(200).send(employee);
      } else {
        res
          .status(400)
          .send({ message: `${err.message} - Employee id not found.` });
      }
    });
  };

  static employeeRegister = (req, res) => {
    let employee = new employees(req.body);
    employee.save((err) => {
      if (!err) {
        res.status(201).send(employee.toJSON());
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Employee register fail.` });
      }
    });
  };

  static employeeUpdate = (req, res) => {
    const id = req.params.id;
    employee.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Employee updated" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static employeeDelete = (req, res) => {
    const id = req.params.id;
    employee.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "employee deleted" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default employeeController;
