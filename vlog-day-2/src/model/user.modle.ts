import mongoose, { Model } from "mongoose"

interface IUser {
    _id?: mongoose.Types.ObjectId;
    name:string,
    email: string,
    password: string,
    image?:string,
    createdAt?: Date,
    updatedAt?: Date
}

const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
    }
}, {timestamps : true})

// export const UserModel = mongoose.models.userSchema || mongoose.model("user", userSchema)

export const UserModel = (mongoose.models.User as Model<IUser>) || mongoose.model<IUser>("User", userSchema);