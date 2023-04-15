import dotenv from "dotenv";
dotenv.config();

import express, { json, urlencoded } from "express";
import cors from "cors";

//Routes
import mainRoutes from "./routes/mainRoutes.js";

const PORT = process.env.PORT || 5000;

// App initialization
const app = express();

const corsOptions = {
  origin: ["http://localhost:3000", "fareharboururlfor webhooks"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowHeaders: [
    "X-FareHarbor-API-App",
    "X-FareHarbor-API-User",
    "Content-Type",
    "Authorization",
    "X-Frame-Options",
  ],
  optionsSuccessStatus: 200, //Sttaus for preflighst
};

app.use(cors(corsOptions));

app.use(json());

app.use(
  urlencoded({
    extended: false,
  })
);

app.options(["/"], function (res) {
  // Setting headers for the preflights request
  res.header("Access-Control-Allow-Methods", "GET; POST; PUT; DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
});

app.use("/", mainRoutes);

app.listen(PORT, () => {
  console.log(`Living on port: ${PORT}`);
});
