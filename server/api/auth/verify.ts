import { H3Event, defineEventHandler, getHeader } from "h3";
import jwt from "jsonwebtoken";

// Secret key untuk JWT (gunakan environment variable untuk production)
const JWT_SECRET = "qwerty";

export default defineEventHandler(async (event) => {
  const authHeader = getHeader(event, "authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized: No token provided",
    });
  }

  const token = authHeader.split(" ")[1];

  const decoded = jwt.verify(token, JWT_SECRET);

  return {
    user: decoded,
  };
});
