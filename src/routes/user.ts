import { Router, Request, Response } from "express";
import { UserController } from "../controller/userController";

const router = Router();
const userController = new UserController();

router.post("/user", async (req: Request, res: Response) => {
    try{
        await userController.createUser(req,res)
    } catch (error){
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/user/:id', async (req: Request, res: Response) => {
    try {
        await userController.getUser(req,res);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get('/users', async (req: Request, res: Response) => {
    try {
        await userController.getUsers(req,res);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})
  
router.post("/user", (req: Request, res: Response) => {
    res.json({ message: "Register" });
});

export default router;
