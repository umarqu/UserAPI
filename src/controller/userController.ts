import { Request, Response } from 'express';
import { UserService } from '../service/UserService'
import bcrypt from 'bcrypt';

const userService = new UserService();

export class UserController {
    async createUser(req: Request, res: Response): Promise<Response> {
        try{
            const { name, email, username, password, role } = req.body;

            // validation class
            if (!name || !email || !username || !password) {
                return res.status(400).json({ error: "Name, email, username, and password are required." });
            }

            // check if user exsits     
            const existingUser = await userService.isUserInDB(username,email);
            if (existingUser) {
                return res.status(409).json({ error: "Email or username already exists." });
            }

            // hashed 
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await userService.createUser({
                name,
                email,
                username,
                password: hashedPassword,
                role
            });

            return res.status(201).json(user); 
        }
        catch(error){
            return res.status(500).json({ error: 'Failed to create user' });
        }
    }

    async getUser(req:Request, res:Response){
        try{
            const userId = req.params.id;
            const user = await userService.findUserById(userId);

            if(!user){
                return res.status(404).json({
                    error : "User Not Found"
                })
            }

            res.status(200).json(user)
        }
        catch(error){
            console.log("Failed to get user ",error);
            res.status(400).json({
                error: "Invalid request"
            })
        }
    }

    async getUsers(req:Request, res:Response){
        const users = await userService.getAllUsers();
        res.status(200).json(users)
    }
}