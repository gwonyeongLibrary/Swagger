const add = (req, res, next) => {
  const { num1, num2 } = req.query;
  const result = parseInt(num1) + parseInt(num2);
  res.send(String(result));
};

module.exports = {
  add,
};
