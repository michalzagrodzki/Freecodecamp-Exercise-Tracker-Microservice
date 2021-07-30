const { mongoose } = require("./../../service/index");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
});

let UserModel = mongoose.model("User", userSchema);

async function fetchUsers() {
  const query = UserModel.find(function (err) {
    if (err) return err;
  });
  const response = await query;
  return response;
}

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
exports.fetchUsers = fetchUsers;
