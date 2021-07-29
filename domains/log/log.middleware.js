const is = {
  missingParams: (payload) => {
    return payload;
  },
  emptyParams: (payload) => {
    return payload;
  },
};

const validate = {
  id: (payload) => {
    return payload;
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
      res.json({ error: error });
    }
  },
};

exports.validate_log = validate_log;
