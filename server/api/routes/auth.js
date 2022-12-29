const { Router } = require("express");
const route = Router();
const UserRepository = require("../repositories/UserRespository");
const { userResponseTransformer } = require("../../utils/responseTransformer");

module.exports = (app) => {
  app.use("/", route);
  route.post("/login", async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const user = await UserRepository.userLogin(email, password);
      res.json(userResponseTransformer(user, "Getting user"));
    } catch (error) {
      next(error)
    }
  });

  route.post("/register", async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const user = await UserRepository.userRegister(email, password);
      res.json(userResponseTransformer(user, "Getting user"));
    } catch (error) {
      next(error)
    }
  });
};
