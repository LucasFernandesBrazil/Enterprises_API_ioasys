import companys from "../models/Company.js";

class companyController {
    
    static companysList = (req, res) => {
        companys.find((err, companys) => {
            res.status(200).json(companys)
        })
    }

    static companyListByID = (req, res) => {
        const id = req.paramns.id
         companys.findById(id, (err, companys) => {
             if(err) {
                 res.status(400).send({message: `${err.message} - Company id not found.`})
             } else {
                 res.status(200).send(companys)
             }
         })
    }

    static companyRegister = (req, res) => {
        let company = new companys(req.body)

        company.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - company register fail.`})
            } else{
                res.status(201).send(company.toJSON())
            }
        })
    }
}

export default companyController;
