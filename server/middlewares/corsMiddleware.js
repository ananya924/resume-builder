import cors from "cors";

const allowedOrigins = [
  "http://localhost:5173",
  "https://resume-builder-tau-snowy.vercel.app"
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Origin ${origin} not allowed by CORS`));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"], 
  credentials: true,
};

export default cors(corsOptions);