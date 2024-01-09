import express from "express";

import AuthRoute from "./AuthRoute";
import users from "./users";
import blogRoutes from "./blogRoutes";

const router = express.Router();

export default (): express.Router => {
  AuthRoute(router);
  users(router);
  blogRoutes(router);
  return router;
};
