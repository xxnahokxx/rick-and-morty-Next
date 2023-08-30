import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongoDB"
import mongoose from "mongoose";
import Favorite from "@/app/models/favorite";


export async function POST(req: Request) {
    const { id, userId } = await req.json();

    try {
        await connectDB();
        await Favorite.create({ id, userId })

        return NextResponse.json({ msg: ["Message sent successfully"], success: true });

    } catch (error) {
        console.log(error);
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(e);
            }
            return NextResponse.json({ msg: errorList })
        }
    }
}


export async function GET() {
    try {
        await connectDB();
        const info = await Favorite.find();

        return NextResponse.json(info)

    } catch (error) {
        console.log(error);
    }
}

