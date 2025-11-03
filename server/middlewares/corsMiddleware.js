import cors from "cors";

const allowedOrigins = [
  "http://localhost:3000", // Your React app during development
  "https://resume-builder-tau-snowy.vercel.app/"
];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Origin ${origin} not allowed by CORS`));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS", // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"], // Allowed headers
  credentials: true, // Allow credentials like cookies
};

export default cors(corsOptions);