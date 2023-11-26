import { Router } from "express";
import { signup, currentUser } from "../controllers/user";
import { signupDataValidator } from "../utils/validators";

const router = Router();

router.post("/api/users/signup", signupDataValidator, signup);
router.get("/api/users/current-user");

export default router;
