const { Router } = require("express");
const route = Router();
const { responseTransformer } = require("../../utils/responseTransformer");
const authMiddleware = require("../middlewares/authMiddleware");
const UserRespository = require("../repositories/UserRespository");

module.exports = (app) => {
  app.use("/user/favorites", route);
  route.use(authMiddleware);

  route.get("/", async (req, res, next) => {
    try {
      console.log(req.user);
      const { email } = req.user;
      const favs = await UserRespository.getFavorites(email);
      return res.json(responseTransformer(favs, "Getting favorites"));
    } catch (error) {
      next(error);
    }
  });

  route.put("/", async (req, res, next) => {
    try {
      console.log(req.user);
      const { email } = req.user;
      const { favoriteId } = req.body;
      const favs = await UserRespository.insertFavorite(email, favoriteId);
      return res.json(responseTransformer(favs, "Inserting favorites"));
    } catch (error) {
      next(error);
    }
  });

  route.delete("/", async (req, res, next) => {
    try {
      const { email } = req.user;
      const { favoriteId } = req.body;
      const favs = await UserRespository.removeFavorite(email, favoriteId);
      return res.json(responseTransformer(favs, "Removing favorites"));
    } catch (error) {
      next(error);
    }
  });
};
