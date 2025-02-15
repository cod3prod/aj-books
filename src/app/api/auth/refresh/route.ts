import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { generateTokens } from "@/utils/generate-tokens";
import { verifyToken } from "@/utils/verify-token";

export async function POST(request: Request) {
  const { refreshToken } = await request.json();

  try {
    const decoded = verifyToken(refreshToken);
    console.log(decoded);
    const admin = await prisma.user.findFirstOrThrow({
      where: { id: decoded.sub },
    });

    const tokens = await generateTokens(admin);
    const result = {
      tokens: {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      },
      user: {
        id: admin.id,
        username: admin.username,
      },
    };

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid Token" }, { status: 401 });
  }
}
