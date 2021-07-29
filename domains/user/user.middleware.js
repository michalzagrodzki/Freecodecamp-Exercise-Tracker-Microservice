const is = {
  missingBody: (payload) => {
    if (!payload.body) return true;
  },
  emptyBody: (payload) => {
    if (!payload.body.username && payload.body.username === "") return true;
  },
};

const validate = {
  username: (payload) => {
    noSpecialCharacters = (payload) => {
      regex = new RegExp(/^[a-zA-Z0-9!@,._-]+$/g);
      return regex.test(payload);
    };
    if (noSpecialCharacters(payload)) return;
    throw "No special characters are allowed in username";
  },
};

const validate_user = {
  post: function (req, res, next) {
    try {
      if (is.missingBody(req)) throw "Missing username";
      if (is.emptyBody(req)) throw "Username is empty";
      validate.username(req.body.username);

      next();
    } catch (error) {
      res.json({ error: error });
    }
  },
};

exports.validate_user = validate_user;
