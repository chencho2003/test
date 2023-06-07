import express from "express";
import {
  deleteUser,
  getUsers,
  updateUser,
  updateCCA,
} from "../controllers/user.js";
import { login, register, logout } from "../controllers/auth.js";

const router = express.Router();
router.get("/", getUsers);
router.put("/:username", updateUser);
router.put("/cca/:username", updateCCA);
router.delete("/:id", deleteUser);
router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);

export default router;
