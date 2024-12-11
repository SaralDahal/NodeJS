import express from "express";
import cors from 'cors';
import { dbConnection } from "./configs/db.js";

import user from "./route/user.js"
// import insert from "./route/todo.js";

const app = express();

app.use(cors({

}))
app.use(express.json());
// app.use(express.urlencoded());

dbConnection();



app.use(user)
// app.use(insert)


// Catch-all route for unmatched paths
app.use((req, res) => {
  res.status(404).json({ error: "Page Not Found" });
});

app.listen(4000, () => {
  console.log("server is running on port 4000...");
});
