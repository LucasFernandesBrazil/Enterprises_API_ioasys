import departments from "../models/Department.js";
import department from "../models/Department.js";

class departmentController {
  static departmentList = (req, res) => {
    department
      .find()
      .populate("empresa")
      .exec((err, department) => {
        res.status(200).json(department);
      });
  };

  static departmentListByID = (req, res) => {
    const id = req.params.id;
    department
      .findById(id)
      .populate("empresa", "nome")
      .exec((err, department) => {
        if (!err) {
          res.status(200).send(department);
        } else {
          res
            .status(400)
            .send({ message: `${err.message} - department id not found.` });
        }
      });
  };

  static departmentRegister = (req, res) => {
    let department = new departments(req.body);
    department.save((err) => {
      if (!err) {
        res.status(201).send(department.toJSON());
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - department register fail.` });
      }
    });
  };

  static departmentUpdate = (req, res) => {
    const id = req.params.id;
    department.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "department updated" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static departmentDelete = (req, res) => {
    const id = req.params.id;
    department.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "department deleted" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default departmentController;
