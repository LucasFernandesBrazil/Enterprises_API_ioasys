import companys from "../models/Company.js";

class companyController {
  static companysList = (req, res) => {
    companys.find((err, companys) => {
      res.status(200).json(companys);
    });
  };

  static companyListByID = (req, res) => {
    const id = req.params.id;
    companys.findById(id, (err, companys) => {
      if (!err) {
        res.status(200).send(companys);
      } else {
        res
          .status(400)
          .send({ message: `${err.message} - Company id not found.` });
      }
    });
  };

  static companyRegister = (req, res) => {
    let company = new companys(req.body);
    company.save((err) => {
      if (!err) {
        res.status(201).send(company.toJSON());
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - company register fail.` });
      }
    });
  };

  static companyUpdate = (req, res) => {
    const id = req.params.id;
    companys.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Company updated" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static companyDelete = (req, res) => {
    const id = req.params.id;
    companys.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Company deleted" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default companyController;
