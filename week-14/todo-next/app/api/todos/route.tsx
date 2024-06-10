import { NextRequest, NextResponse } from "next/server";
import db from "@/app/db";

export async function GET(req: NextRequest) {
    try {
        const todos = await db.todo.findMany();
        return NextResponse.json({
            success: true,
            todos,
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
        });
    }
}
