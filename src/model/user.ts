import mongoose , { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    username: string;
    email: string;
    age?: number;
    password: string;
    createdAt?: Date;
    role: "user" | "admin";  
    lastLogin?: Date;      
    resetToken?: string;
    resetTokenExpiration?: Date;
    updatedAt?: Date;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    age: { type: Number, required: false },
    password: { type: String, required: true, unique: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    lastLogin: { type: Date, required: false }, 
    resetToken: { type: String, required: false }, 
    resetTokenExpiration: { type: Date, required: false }, 
},
{
    timestamps: true, // Automatically adds `createdAt` and `updatedAt`
})

export const User = mongoose.model<IUser>("User", UserSchema);
