import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongoDB"
import Contact from "@/app/models/contact";
import mongoose from "mongoose";


export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    try {

        await connectDB();
        await Contact.create({ name, email, message })

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
        const info = await Contact.find();

        return NextResponse.json(info)

    } catch (error) {
        console.log(error);

    }
}
