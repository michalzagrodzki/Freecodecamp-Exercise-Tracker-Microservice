const { noSpecialCharacters } = require("./../../utils/methods");

const is = {
  missingParams: (payload) => {
    if (!payload.params) return true;
  },
  emptyParams: (payload) => {
    const { ":_id": _id } = payload.params;
    if (!_id && _id === "") return true;
  },
};

const validate = {
  id: (payload) => {
    if (!noSpecialCharacters(payload)) {
      throw "No special characters allowed in id";
    }
  },
};

const validate_log = {
  get: function (req, res, next) {
    try {
      if (is.missingParams(req)) throw "Missing user id";
      if (is.emptyParams(req)) throw "User id is empty";
      validate.id(req.params._id);

      next();
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },
};

exports.validate_log = validate_log;
