import { body } from "express-validator"

export const signupDataValidator=[
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().isLength({min:8,max:18}).withMessage('Password must be between 8 and 18 characters')
]