type DecodedJWT = {
  sub: string;
  id: string;
  username: string;
  password: string;
  createdAt: string; //'2025-02-15T11:52:30.693Z',
  iat: number;
  exp: number;
  aud: string;
  iss: string;
};

type Admin = {
    id: string;
    username: string;
    password: string;
    createdAt: Date;
}