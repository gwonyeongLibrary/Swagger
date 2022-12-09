const add = (req, res, next) => {
  const { num1, num2 } = req.query;
  const result = parseInt(num1) + parseInt(num2);
  res.send(String(result));
};

const post_add = (req, res, next) => {
  try {
    const { num1, num2, num3 } = req.body;
    const result = parseInt(num1) + parseInt(num2) + parseInt(num3);
    res.send(String(result));
  } catch (err) {
    res.status(400).send("error!");
  }
};

module.exports = {
  add,
  post_add,
};
