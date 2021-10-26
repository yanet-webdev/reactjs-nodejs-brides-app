import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import data from "./data.js";
import dataPlan from "./data-plan.js";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*connecting to the mongoDB database*/
mongoose.connect("mongodb://localhost/newbrides", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});

app.get("/api/productPlans", (req, res) => {
  res.send(dataPlan.productPlans);
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

const __dirname = path.resolve();
app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) => 
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);

// app.get("/", (req, res) => {
//   res.send("Server is ready ");
// });

/*error catcher middleware*/
app.use((err, req, res, next) => {
  res.status(500).send({ mesasage: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve is at http://localhost:${port}`);
});
