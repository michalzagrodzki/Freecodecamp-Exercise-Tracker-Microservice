const is = {
  missingBody: (payload) => {
    if (!payload.body) return true;
  },
  emptyBody: (payload) => {
    const { ":_id": _id, description, duration } = payload.body;
    if (_id && description && duration) return false;
    return true;
  },
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
    return payload;
  },
  request: (payload) => {
    return payload;
  },
};

const validate_exercise = {
  post: function (req, res, next) {
    try {
      if (is.missingParams(req)) throw "Missing user id";
      if (is.emptyParams(req)) throw "Username id is empty";
      if (is.missingBody(req)) throw "Missing request body";
      if (is.emptyBody(req)) throw "Request body is empty";
      validate.id(req.params._id);
      validate.request(req.body);

      next();
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },
};

exports.validate_exercise = validate_exercise;
