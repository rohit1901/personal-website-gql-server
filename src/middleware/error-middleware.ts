import {ApiError} from "@/types/interfaces/interfaces.common";
import {NextFunction, Request, Response} from "express";

// @desc Handles error responses from throw errors

export const errorResponse = (error: ApiError, _req: Request, res: Response, _next: NextFunction) => {
    res.status(error.statusCode || 500).json({
        success: false,
        data: error.data,
        message: error.message,
    });
};