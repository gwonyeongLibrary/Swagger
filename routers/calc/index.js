const calcRouter = require("express").Router();
const calc_controller = require("./calc.controller");

calcRouter.get("/add", calc_controller.add);
calcRouter.post("/add", calc_controller.post_add);

module.exports = calcRouter;
