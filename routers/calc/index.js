const calcRouter = require("express").Router();
const calc_controller = require("./calc.controller");

calcRouter.get("/add", calc_controller.add);

module.exports = calcRouter;
