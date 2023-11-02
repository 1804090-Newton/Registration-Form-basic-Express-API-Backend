const express=require("express");
const { createUserControllerFn } = require("../src/employee/employeeController");
const router=express.Router();

router.route('/user/create').post(createUserControllerFn);
module.exports=router;
