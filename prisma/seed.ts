import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      username: "admin",
      password: "test", // must be hashed
    },
  });

  await prisma.book.createMany({
    data: [
      {
        title: "기록이라는 세계",
        author: "리니",
        img_url: "https://image.yes24.com/goods/140536812/LG",
        price: 17700,
        amount: 10,
      },
      {
        title: "영원에 빚을 져서",
        author: "예소연",
        img_url: "https://image.yes24.com/goods/142197878/LG",
        price: 15000,
        amount: 2,
      },
    ],
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
