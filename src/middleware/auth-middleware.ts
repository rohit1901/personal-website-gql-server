import { NextFunction } from "connect";
import { Request, Response } from "express";

// @desc Authenticates user and protects routes

export const verify = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.status(401).json({message: "Unauthorized"});
  }
};
