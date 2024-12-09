import { User, IUser } from '../model/user'

export class UserService {
    async createUser(data: { 
        name: string; email: string; username: string, password: string, role: string
    }): Promise<IUser> {
        
        const user = new User(data);
        return await user.save(); 
    }

    async findUserById(userId: string): Promise<IUser | null> {
        try{
            return await User.findById(userId); 
        }
        catch(error){
            console.error("Error querying user:", error);
            throw error;
        }
    }
    
    // Method to update a user's email
    async updateUserEmail(userId: string, email: string): Promise<IUser | null> {
        return await User.findByIdAndUpdate(userId, { email }, { new: true }); // Update in MongoDB
    }

    async isUserInDB(username: string, email: string){
        return await User.findOne({ $or: [{ email }, { username }] });
    }

    async deleteUser(userId: string): Promise<IUser | null> {
        return await User.findByIdAndDelete(userId); 
    }

    async getAllUsers(): Promise<IUser[]> {
        return await User.find();
    }
}