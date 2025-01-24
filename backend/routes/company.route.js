import express from "express";
import {isAuthenticated} from "../middlewares/isAuthenticated.js"
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js"

const routes=express.Router();

routes.route("/register").post(isAuthenticated,registerCompany)
routes.route("/get").get(isAuthenticated,getCompany)
routes.route("/get/:id").get(isAuthenticated,getCompanyById)
routes.route("/update/:id").put(isAuthenticated,updateCompany)

export default routes
