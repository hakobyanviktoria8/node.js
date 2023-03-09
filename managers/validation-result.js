const { validationResult } = require("express-validator");
const AppError = require("./app-error");
const ResponseManager = require("./response-manager");

module.exports = (req, res, next) => {
  const responseHandler = ResponseManager.getResponseHandler(res);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return responseHandler.onError(new AppError("Validation ERROR"), 403, {
      errors: errors.mapped(),
    });
  }
  next();
};
