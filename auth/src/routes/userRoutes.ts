import { Router } from "express";
import { signup, currentUser } from "../controllers/user";
import { signupDataValidator } from "../utils/validators";

const userRouter = Router();

userRouter.post("/api/users/signup", signupDataValidator, signup);
userRouter.get("/api/users/current-user", currentUser);

export default userRouter;
