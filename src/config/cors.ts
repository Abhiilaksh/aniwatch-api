import { config } from "dotenv";
import { cors } from "hono/cors";

config();

// Allow all origins
const allowedOrigins = ["*"]; // Allow all origins for requests without credentials

const corsConfig = cors({
  allowMethods: ["GET"],
  maxAge: 600,
  credentials: false, // No credentials allowed
  origin: allowedOrigins,
});

export default corsConfig;
