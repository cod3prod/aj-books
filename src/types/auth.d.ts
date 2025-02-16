type User = {
  id: string;
  username: string;
};

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

type AuthResponse = {
  tokens: Tokens;
  user: User;
};

type AuthState = {
  tokens: Tokens | null;
  user: User | null;
};
