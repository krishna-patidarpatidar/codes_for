
const route = require('express').Router();


const categoryRoute= require("./category/CategoryRoutes")
const serviceRoute = require("./services/ServiceRoutes")
const userRoute= require("./user/UserRoute")
route.use("/category",categoryRoute)
route.use("/service",serviceRoute)
route.use("/user",userRoute)


module.exports= route