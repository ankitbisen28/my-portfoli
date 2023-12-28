import express from "express";

import AuthRoute from "./AuthRoute";
import users from "./users";

const router = express.Router();

export default (): express.Router => {
  AuthRoute(router);
  users(router);

  return router;
};
