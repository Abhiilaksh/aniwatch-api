import { config } from "dotenv";
import { cors } from "hono/cors";

config();

// Allow all origins
const allowedOrigins = ["*"];

const corsConfig = cors({
  origin: allowedOrigins,
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
  maxAge: 600,
  credentials: true, // Allow credentials if needed
});

export default corsConfig;
