const { getUser } = require("./../user/user.service");
const { fetchExercises } = require("./../exercise/exercise.service");

// get logs
exports.get = async (req, res) => {
  try {
    const { _id } = req.params;

    const responseLogs = await fetchExercises(_id);

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
