const responseSuccess = (res, statusCode, data) => {
  res.status(statusCode).send({
    ok: true,
    resp: data,
  });
};
const responseError = (res, statusCode, data) => {
  res.status(statusCode).send({
    ok: false,
    resp: data,
  });
};

module.exports = { responseSuccess, responseError };
