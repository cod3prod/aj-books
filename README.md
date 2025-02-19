# AJ BOOKS

**Prisma를 활용한 온라인 서점 웹 애플리케이션**

## 🎯 **Project Purpose**  
  DEMO : https://aj-books.vercel.app/  
  TEST PASSWORD : test123

- **핵심 목표**: Next.js 15 기반 풀 스택 애플리케이션 구축

## 🔨 **Tech Stack**

- **주요 기술**: Next.js 15, TypeScript, Redux, Prisma
- **데이터베이스 및 배포**: MongoDB Atlas, Vercel

## 📝 **Key Point**

- API Route를 사용하여 RESTful API 구현
- 책 목록 페이지 구현  
  redux-thunk를 사용

```typescript
// store/slices/book-slice.ts
// ...
export const fetchBooksData = createAsyncThunk(
  "book/fetchBooksData",
  async ({ page, title, author }: FetchBooksParams) => {
    try {
      const url = new URL(`${BASE_URL}/api/books`);
      url.searchParams.append("page", String(page));
      if (title) url.searchParams.append("title", title);
      if (author) url.searchParams.append("author", author);

      const response = await fetch(url.toString());
      const data: BookListResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching books data:", error);
      throw error;
    }
  }
);
```

- 페이지네이션 및 필터링  
  쿼리스트링

```typescript
// @/app/api/books/route.ts
// ...
const { searchParams } = new URL(request.url);
const page = Number(searchParams.get("page")) || 1;
const limit = 10;
const skip = (page - 1) * limit;

// title과 author 필터값 가져오기
const titleFilter = searchParams.get("title");
const authorFilter = searchParams.get("author");
```
- 도세 상세 페이지 구현
- JWT 기반 도서 정보 CRUD 권한 보호

- 커스텀 훅과 refreshToken을 활용한 토큰 갱신

```typescript
// @/hooks/use-refresh.ts
// ...
const refreshToken = async (): Promise<AuthResponse | null> => {
  try {
    if (!tokens?.refreshToken) {
      throw new Error("No refresh token available");
    }

    const response = await fetch(`${BASE_URL}/api/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: tokens.refreshToken }),
    });

    if (!response.ok) {
      localStorage.removeItem("tokens");
      localStorage.removeItem("user");
      throw new Error("Failed to refresh token");
    }
    const result = (await response.json()) as AuthResponse;
    dispatch(setTokens(result.tokens));
    dispatch(setUser(result.user));
    console.log("refreshed tokens:", result.user.username, result.tokens);
    return result;
  } catch (error) {
    console.error("Token refresh failed:", error);
    return null;
  }
};
```