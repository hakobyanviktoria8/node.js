const { validationResult } = require("express-validator");
const AppError = require("./app-error");
const ResponseManager = require("./response-manager");

module.exports = (req, res, next) => {
  // const responseHandler = ResponseManager.getResponseHandler(res);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.onError(new AppError("Validation ERROR11111111"), 403, {
      errors: errors.mapped(),
    });
  }
  next();
};
