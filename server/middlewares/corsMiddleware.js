// server/middlewares/corsMiddleware.js
import cors from "cors";

// Allow all origins but still reflect origin for requests (better if credentials true)
const corsOptions = {
  origin: true, // reflect request origin, effectively allows any origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true,           // set false if you don't need cookies/auth
  preflightContinue: false,   // let cors() handle the OPTIONS response
  optionsSuccessStatus: 204
};

const corsMiddleware = cors(corsOptions);

export { corsMiddleware, corsOptions };
export default corsMiddleware;