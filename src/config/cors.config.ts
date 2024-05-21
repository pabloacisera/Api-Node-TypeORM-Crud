import { ORIGIN } from "./config";

const corsConfig = {
  allowedHeaders: "*",
  methods: "GET, POST, HEAD, PATCH, PUT, DELETE",
  preflightContinue: false,
  origin: ORIGIN,
};

export default corsConfig;
