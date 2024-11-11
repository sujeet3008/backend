import bcrypt from "bcrypt";

const credentials = {
  email: 'ranjansujeet34@gmail.com',


  passwordHash: '$2b$10$mA9WX96r2ZREqokSltcqyeU4ZaffeCBJ3D22uQS9BmjNRqbBkVBYO' 
};

const verifyLogin = async (email, password) => {
  





  if (email !== credentials.email) {
    return false;
  }

  console.log("Comparing password...");

  
  const isPasswordCorrect = await bcrypt.compare(password, credentials.passwordHash);

  console.log("Password match result:", isPasswordCorrect);
  return isPasswordCorrect;
};

export default verifyLogin;
