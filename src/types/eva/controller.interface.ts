import { RequestHandler, Router } from 'express';

export default interface IController {
    path(): string;
    router(): Router;
    getALl?: RequestHandler
    getOne?: RequestHandler
    createOne?: RequestHandler
    updateOne?: RequestHandler
    deleteOne?: RequestHandler
}