import connectDB from "@/app/lib/mongoDB";
import Favorite from "@/app/models/favorite";
import { NextResponse } from "next/server";


export async function GET(req: Request, { params }: { params: { id: string } }) {
    console.log(params);
    
    const { id } = params;
    try {
        await connectDB();
        const data = await Favorite.findById(id);
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
    }
}


export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        await connectDB();
        await Favorite.findByIdAndDelete(id);
        return NextResponse.json({ msg: ["Delete success"], success: true });
    } catch (error) {
        console.log(error);
    }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        await connectDB();
        await Favorite.findByIdAndUpdate(id);
        return NextResponse.json({ msg: ["Update success"], success: true });
    } catch (error) {
        console.log(error);
    }

}
