import { config } from "dotenv";
import { cors } from "hono/cors";

config();

// Allow all origins
const allowedOrigins = process.env.ANIWATCH_API_CORS_ALLOWED_ORIGINS?.split(",") || ["*"];

const corsConfig = cors({
  origin: allowedOrigins,
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
  maxAge: 600,
  credentials: true, // Allow credentials if needed
});

export default corsConfig;