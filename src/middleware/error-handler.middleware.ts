import { NextFunction, Request, Response } from "express";

export const defaultErrorHandler = (err: Error, req: Request, resp: Response, next: NextFunction) => {
    resp.status(500).send({ success: false, message: err.message });
}