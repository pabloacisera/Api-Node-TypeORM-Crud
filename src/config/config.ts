import { config } from "dotenv";

config({
  path: `.env.${process.env.NODE_ENV || "development"}.local`,
});

export const {
  NODE_ENV,
  PORT,
  LOG_DIR,
  LOG_FORMAT,
  API_VERSION,
  ORIGIN,
  DB_PORT,
  DB_NAME,
  DB_HOST,
  DB_PASSWORD,
  DB_DATABASE,
} = process.env;
