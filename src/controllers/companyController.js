import companys from "../models/Company.js";

class companyController {
    
    static companysList = (req, res) => {
        companys.find((err, companys) => {
            res.status(200).json(companys)
        })
    }
}

export default companyController;
