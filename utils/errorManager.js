const errorManager = (res, errors, statusCode) => {
  res.status(statusCode).send({
    ok: false,
    erros: errors.mapped(),
  });
};

module.exports = { errorManager };
