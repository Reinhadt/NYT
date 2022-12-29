const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const Conflict = require("../response/error/Conflict");

class UserRepository {
  async userLogin(email, password) {
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        const validPassword = await bcrypt.compare(
          password,
          existingUser.password
        );

        if (validPassword) {
          const token = jwt.sign(
            { userId: existingUser.id, email },
            process.env.TOKEN_KEY
          );

          return { token };
        } else {
          throw new Conflict("Invalid password");
        }
      } else {
        throw new Conflict("User not found");
      }
    } catch (error) {
      throw error;
    }
  }

  async userRegister(email, password) {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Conflict("User already exists");
    }

    const encryptedPass = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: encryptedPass,
    });

    const token = jwt.sign(
      { userId: newUser._id, email },
      process.env.TOKEN_KEY
    );

    return { token };
  }

  async getFavorites(email) {
    const { favorites } = await User.findOne({ email })
      .populate("favorites", "abstract")
      .exec();
    console.log(favorites);
    return { total: favorites.length, data: favorites };
  }

  async insertFavorite(email, favId) {
    const { favorites } = await User.findOneAndUpdate(
      { email },
      { $addToSet: { favorites: favId } }
    );
    console.log(favorites);
    return { total: favorites.length, data: favorites };
  }

  async removeFavorite(email, favId) {
    const { favorites } = await User.findOneAndUpdate(
      { email },
      { $pull: { favorites: favId } }
    );
    console.log(favorites);
    return { total: favorites.length, data: favorites };
  }

}

module.exports = new UserRepository();
