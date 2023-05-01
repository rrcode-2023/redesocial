import { NextFunction, Response, Request } from "express";
import { ZodTypeAny } from "zod";
import * as z from "zod";

export const validateBody =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      return next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessage = error.flatten().fieldErrors;
        return res.status(400).json({
          errors: errorMessage,
        });
      }
    }
  };
