import * as bcrypt from "bcrypt";

export const hashPassword = async (data: string | Buffer): Promise<string> => {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(data, salt);
};

export const comparePassword = async (
  data: string | Buffer,
  hashedPassword: string
): Promise<boolean> => bcrypt.compare(data, hashedPassword);
