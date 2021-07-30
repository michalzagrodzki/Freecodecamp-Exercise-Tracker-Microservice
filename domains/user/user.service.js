const { mongoose } = require("./../../service/index");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
});

let UserModel = mongoose.model("user", userSchema);

async function postUser(payload) {
  const { username } = payload;
  const userRecord = new UserModel({
    username,
  });
  await userRecord.save(function (err) {
    if (err) return err;
  });
  const { _id: response } = userRecord;
  return response;
}

exports.postUser = postUser;
