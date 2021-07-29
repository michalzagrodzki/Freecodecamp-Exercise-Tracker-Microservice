const { validateGetRequest } = require("./log.methods");

// get logs
exports.get = async (req, res) => {
  try {
    validateGetRequest(req);
    const { _id } = req.params;

    const responseLogs = await fetchLogs(_id);

    const responseUser = await getUser(_id);
    const response = {
      responseUser,
      logs: responseLogs,
    };
    res.json(response);
  } catch (error) {
    res.json({ error: error });
  }
};
