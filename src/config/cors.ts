import { config } from "dotenv";
import { cors } from "hono/cors";

config();

const corsConfig = cors({
  allowMethods: ["GET"], // Specifies the HTTP methods allowed
  maxAge: 600,           // Specifies the maximum time (in seconds) the preflight request can be cached
  credentials: true,     // Allows sending credentials like cookies or authorization headers
  origin: "https://www.anigalaxy.xyz", // Allows requests only from https://anigalaxy.xyz
});

export default corsConfig;
