import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function GET() {
    return Response.json({
        name: "jayesh",
        email: "jayeshyadav8080@gmail.com",
    });
}

export async function POST(res: NextRequest) {
    const data = await res.json();
    await prisma.user.create({
        data: {
            username: data.username,
            password: data.password,
        },
    });
    return Response.json({
        msg: "Login in successful",
    });
}
