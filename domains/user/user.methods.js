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

function validatePostRequest(payload) {
  if (is.missingBody(payload)) throw "Missing username";
  if (is.emptyBody(payload)) throw "Username is empty";
  validate.username(payload.body.username);
}

exports.validatePostRequest = validatePostRequest;
