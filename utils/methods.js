noSpecialCharacters = (payload) => {
  regex = new RegExp(/^[a-zA-Z0-9!@,._\s-]+$/g);
  return regex.test(payload);
};

exports.noSpecialCharacters = noSpecialCharacters;
