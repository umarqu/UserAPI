import { Router, Request, Response } from "express";

const router = Router();

// Example route: GET /hello
router.get("/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello, World!" });
});

// Example route: POST /data
router.post("/data", (req: Request, res: Response) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

export default router;
