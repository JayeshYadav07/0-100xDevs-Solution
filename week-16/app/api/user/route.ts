import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/app/lib/auth";
export const GET = async (req: NextRequest) => {
    const session = await getServerSession(NEXT_AUTH_CONFIG);
    return Response.json({
        msg: "GET",
        userId: session.user.id,
    });
};
