import connectDB from "@/lib/db";
import { UserModel } from "@/model/user.modle";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server"

export const POST =async(req: NextRequest) => {
    try {
        const {name ,email, password} = await req.json();
        console.log(name, email, password);
        
        await connectDB();
        const existingUser = await UserModel.findOne({email});
        if(existingUser){
            return NextResponse.json({message: "User already exists!!!"},{status: 400})
        }

        if(password.length<6){
            return NextResponse.json(
                {message: "Password must be at least 6 Characters!!"},
                {status: 400    }
            )
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await UserModel.create({
            name,
            email,
            password:hashedPassword
        })
         return NextResponse.json(
           user,
                {status: 201  }
            )

    } catch (error) {
         return NextResponse.json(
                {message: `User registration error- ${error}`},
                {status: 500 }
            )
    }
}