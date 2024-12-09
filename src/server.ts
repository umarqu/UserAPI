import express, { Request, Response } from "express";
import routes from "./routes";
import user from "./routes/user"
import connectDB from "./config/db";

const app = express();

// Middleware to parse JSON
app.use(express.json());

// connect to MongoDb
connectDB();

// Attach routes
app.use("", routes);
app.use("/api/", user);

// Default route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Express TypeScript App!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//docker exec -it mongodb mongo -u admin -p password123 --authenticationDatabase admin
