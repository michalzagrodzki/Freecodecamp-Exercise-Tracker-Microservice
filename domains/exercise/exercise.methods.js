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
  id: (payload) => {
    return payload;
  },
  request: (payload) => {
    return payload;
  },
};

function validatePostRequest(payload) {
  if (is.missingParams(payload)) throw "Missing user id";
  if (is.emptyParams(payload)) throw "Username id is empty";
  if (is.missingBody(payload)) throw "Missing request body";
  if (is.emptyBody(payload)) throw "Request body is empty";
  validate.id(payload.params._id);
  validate.request(payload.body);
}

exports.validatePostRequest = validatePostRequest;
