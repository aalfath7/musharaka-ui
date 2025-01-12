import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  // Secret key untuk JWT
  const secretKey = "qwerty"; // Ganti dengan secret key yang lebih kuat

  // Contoh validasi sederhana
  if (email === "email@gmail.com" && password === "password") {
    // Data user
    const user = {
      id: 1,
      name: "admin",
      email,
    };

    // Buat token JWT
    const token = jwt.sign(user, secretKey, { expiresIn: "1h" });

    return {
      user,
      token,
    };
  }

  return {
    error: "Invalid credentials",
  };
});
