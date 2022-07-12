const responseSuccess = (res, statusCode, message) => {
  res.status(statusCode).send({
    ok: true,
    message,
  });
};
const responseError = (res, statusCode, message) => {
  res.status(statusCode).send({
    ok: false,
    message,
  });
};

module.exports = { responseSuccess, responseError };
