import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { verifyToken } from "@/utils/verify-token";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    // title과 author 필터값 가져오기
    const titleFilter = searchParams.get("title");
    const authorFilter = searchParams.get("author");
    // console.log("titleFilter", titleFilter);
    // console.log("authorFilter", authorFilter);

    // where 조건 생성 (조건이 있을 때만 객체에 추가)
    const where: {
      title?: { contains: string; mode: "insensitive" };
      author?: { contains: string; mode: "insensitive" };
    } = {};

    if (titleFilter) {
      where.title = { contains: titleFilter, mode: "insensitive" };
    }
    if (authorFilter) {
      where.author = { contains: authorFilter, mode: "insensitive" };
    }

    const [books, total] = await Promise.all([
      prisma.book.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.book.count({ where }),
    ]);

    // console.log("books", books);
    // console.log("total", total);
    return NextResponse.json({
      data: books,
      pagination: {
        currentPage: total === 0 ? 0 : page,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const authHeader = request.headers.get("Authorization");
  // console.log("debug", authHeader);
  if (!authHeader) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  const decoded = verifyToken(token);

  if (!decoded) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    // console.log("debug", body);
    const book = await prisma.book.create({ data: body });
    return NextResponse.json(book, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
