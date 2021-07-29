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

function validateGetRequest(payload) {
  if (is.missingParams(payload)) throw "Missing user id";
  if (is.emptyParams(payload)) throw "User id is empty";
  validate.id(payload.params._id);
}

exports.validateGetRequest = validateGetRequest;
