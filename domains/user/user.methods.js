const is = {
  missingBody: (payload) => {
    return payload;
  },
  emptyBody: (payload) => {
    return payload;
  },
  missingParams: (payload) => {
    return payload;
  },
  emptyParams: (payload) => {
    return payload;
  },
};

const validate = {
  username: (payload) => {
    return payload;
  },
  id: (payload) => {
    return payload;
  },
};

function validateGetRequest(payload) {
  if (is.missingParams(payload)) throw "Missing user id";
  if (is.emptyParams(payload)) throw "Id is empty";
  validate.id(payload.params._id);
}

function validatePostRequest(payload) {
  if (is.missingBody(payload)) throw "Missing username";
  if (is.emptyBody(payload)) throw "Username is empty";
  validate.username(payload.body.username);
}

exports.validateGetRequest = validateGetRequest;
exports.validatePostRequest = validatePostRequest;
