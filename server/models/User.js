const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  favorites: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "News",
    },
  ],
});

const User = new mongoose.model("User", UserSchema);

module.exports = User;
