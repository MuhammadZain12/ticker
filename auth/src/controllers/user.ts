import { Request, Response } from 'express';
import { validationResult } from 'express-validator';


export const signup = (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({"Error":errors.array().map(error => error.msg)});
    }
    res.send('Hello World');
}

export const currentUser = (req: Request, res: Response) => {
    res.send('Hello World');
}