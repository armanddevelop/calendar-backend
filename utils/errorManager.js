const errorManager = (res, errors, statusCode) => {
  res.status(statusCode).send({
    ok: false,
    error: errors.mapped(),
  });
};

module.exports = { errorManager };
