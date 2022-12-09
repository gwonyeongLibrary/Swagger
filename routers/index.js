const router = require("express").Router();
const user = require("./user");
const calc = require("./calc");

router.use(
  "/user",
  () => {
    /**
     * #swagger.tags = ['Users']
     */
  },
  user
);

router.use(
  "/calc",
  () => {
    /**
     * #swagger.tags = ['Calc']
     */
  },
  calc
);
module.exports = router;
