// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import todosRoutes from "./routes/todos.js";

// const app = express();

// dotenv.config();

// app.use(express.json({ extended: true }));
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use("/todos", todosRoutes);
// app.get("/", (req, res) => {
//   res.send({"message":"API server working","version":"0.1"});
// });

// const PORT = process.env.PORT || 5000;
// mongoose
//   .connect(process.env.mongodb, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(
//     app.listen(PORT, () => {
//       console.log(`server is running on port ${PORT}`);
//     })
//   )
//   .catch((err) => console.log(err));

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import todosRoutes from "./routes/todos.js";

const app = express();

dotenv.config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/todos", todosRoutes);

app.get("/", (req, res) => {
  res.send({"message":"API server working","version":"0.1"});
});

const PORT = process.env.PORT || 5000;

console.log("MongoDB URI:", process.env.MONGODB_URI);  // Log the URI to verify it's loaded correctly

mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err));
