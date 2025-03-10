const express = require("express");
const repoRouter = express.Router();
const repoController = require("../controllers/repoController");

repoRouter.post("/repo/create", repoController.createRepository);
repoRouter.get("/repo/all", repoController.getAllRepositories);
repoRouter.get("/repo/:id", repoController.fetchRepositoryById);
repoRouter.get("/repo/name/:name", repoController.fetchRepositoryByName);
repoRouter.get(
  "/repo/user/:userID",
  repoController.fetchRepositoriesForCurrentUser
);
repoRouter.delete("/repo/delete/:id", repoController.deleteRepositoryById);
repoRouter.put("/repo/update/:id", repoController.updateRepositoryById);
repoRouter.patch("/repo/toggle/:id", repoController.toggleVisibilityById);
module.exports = repoRouter;
