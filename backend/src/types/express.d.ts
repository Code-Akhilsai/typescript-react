import { JwtPayload } from "jsonwebtoken";

export interface CustomJwtPayload extends JwtPayload {
  _id?: string;
  email?: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: string | CustomJwtPayload;
    }
  }
}
