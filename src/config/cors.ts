import { config } from "dotenv";
import { cors } from "hono/cors";

config();

const corsConfig = cors({
  allowMethods: ["GET"],
  maxAge: 600,
  credentials: true,
  origin: ["https://www.anigalaxy.xyz", "http://localhost:5173"]  // Fixed: Now in an array
});

export default corsConfig;
