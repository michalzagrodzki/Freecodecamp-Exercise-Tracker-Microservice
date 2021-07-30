const { mongoose } = require("./../../service/index");
const { Schema } = mongoose;

const exerciseSchema = new Schema({
  description: { type: String, required: true },
  duration: { type: Number, required: true, min: 0 },
  date: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

let ExerciseModel = mongoose.model("Exercise", exerciseSchema);

async function postExercise(payload) {
  const { _id, description, duration, date } = payload;
  const exerciseRecord = new ExerciseModel({
    user: _id,
    description,
    duration,
    date,
  });
  await exerciseRecord.save(function (err) {
    if (err) return err;
  });
  const response = {
    description,
    duration,
    date,
  };

  return response;
}

exports.postExercise = postExercise;
