const responseSuccess = (res, statusCode, data) => {
  res.status(statusCode).send({
    ok: true,
    data,
  });
};
const responseError = (res, statusCode, data) => {
  res.status(statusCode).send({
    ok: false,
    data,
  });
};

module.exports = { responseSuccess, responseError };
