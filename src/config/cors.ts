import { config } from "dotenv";
import { cors } from "hono/cors";

config();

const corsConfig = cors({
  allowMethods: ["GET"], // Specifies the HTTP methods allowed
  maxAge: 600, // Specifies the maximum amount of time (in seconds) the preflight request can be cached
  credentials: true, // Allows sending credentials like cookies or authorization headers
  origin: "*", // Allows requests from all origins
});

export default corsConfig;
