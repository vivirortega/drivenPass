import {Request, Response, NextFunction} from 'express';

export default async function errorHandler( error, req: Request, res: Response, next: NextFunction) {
  console.log(error);
  if(error.code) {
    return res.status(error.code).send(error.message);
  }
  return res.sendStatus(500);
}