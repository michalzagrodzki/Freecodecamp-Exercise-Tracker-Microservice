const { validatePostRequest } = require("./user.methods");

// list users
exports.list = async (req, res) => {
  try {
    validateGetRequest(req);

    const response = await fetchUsers();
    res.json(response);
  } catch (error) {
    res.json({ error: error });
  }
};

// post user
exports.post = async (req, res) => {
  try {
    validatePostRequest(req);
    const { username } = req.body;

    const { username: res_username, _id: res_id } = await postUser(username);
    const response = {
      username: res_username,
      _id: res_id,
    };
    res.json(response);
  } catch (error) {
    res.json({ error: error });
  }
};
