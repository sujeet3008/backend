import bcrypt from "bcrypt";

const generateHash = async () => {
  const password = "password123";
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  console.log(hash);
};

generateHash();
