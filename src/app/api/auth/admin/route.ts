import { comparePassword } from "@/utils/bcrypt";
import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { generateTokens } from "@/utils/generate-tokens";

export async function POST(request: Request) {
  let isValid, admin;
  try {
    const { password } = await request.json();
    admin = await prisma.user.findFirstOrThrow({
      where: { username: "admin" },
    });
    isValid = await comparePassword(password, admin.password);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }

  if (!isValid) {
    return NextResponse.json({ error: "Invalid Credentials" }, { status: 401 });
  }

  const tokens = await generateTokens(admin.id, admin);
  const result = {
    tokens: {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
    },
    user: {
        id: admin.id,
        username: admin.username
    }
  }

  return NextResponse.json(result, { status: 200 });
}
