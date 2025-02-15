import jwt from "jsonwebtoken";

if (
  !process.env.JWT_SECRET ||
  !process.env.JWT_ISSUER ||
  !process.env.JWT_AUDIENCE ||
  !process.env.JWT_ACCESS_TOKEN_EXPIRES_IN ||
  !process.env.JWT_REFRESH_TOKEN_EXPIRES_IN
) {
  throw new Error("JWT environment variables not set");
}

const jwtConfig = {
  secret: process.env.JWT_SECRET,
  issuer: process.env.JWT_ISSUER,
  audience: process.env.JWT_AUDIENCE,
  accessTokenExpiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
  refreshTokenExpiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
};

// payload (jwt configuration)
const signToken = <T>(userId: string, expiredIn: number, payload?: T) => {
  return (
    jwtConfig.secret &&
    jwt.sign({ sub: userId , ...payload }, jwtConfig.secret, {
      audience: jwtConfig.audience,
      issuer: jwtConfig.issuer,
      expiresIn: expiredIn,
    })
  );
};

const generateTokens = async <T>(userId: string, payload?: T) => {
  const [accessToken, refreshToken] = [
    signToken<T>(userId, Number(jwtConfig.accessTokenExpiresIn), payload),
    signToken<T>(userId, Number(jwtConfig.refreshTokenExpiresIn), payload),
  ];

  return { accessToken, refreshToken };
};

export { generateTokens };