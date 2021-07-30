const { getUser } = require("./../user/user.service");
const { postExercise } = require("./exercise.service");
const { parseExerciseRequest } = require("./../../utils/methods");

// post exercise
exports.post = async (req, res) => {
  try {
    const { _id } = req.params;
    const {
      description,
      parsed_duration: duration,
      parsed_date: date,
    } = parseExerciseRequest(req.body);
    const {
      description: res_description,
      duration: res_duration,
      date: res_date,
    } = await postExercise({
      _id,
      description,
      duration,
      date,
    });
    const responseUser = await getUser(_id);
    const response = {
      responseUser,
      description: res_description,
      duration: res_duration,
      date: res_date,
    };
    res.json(response);
  } catch (error) {
    res.json({ error: error });
  }
};
