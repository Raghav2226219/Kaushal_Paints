import prisma from "../config/prisma.js";
import { hashPassword, comparePassword } from "../utils/hash.js";
import { generateToken } from "../utils/jwt.js";

export const signup = async (req, res) => {
  try {
    const { name, password, phone } = req.body;
const email = req.body.email?.trim().toLowerCase();

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required",
      });
    }

    // Check whether user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        phone,
      },
    });

    // Never send passwordHash to the client
    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { password } = req.body;
    const email = req.body.email?.trim().toLowerCase();
   

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // Don't reveal whether the email exists
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

     const token = generateToken(user.id);

    // Compare password with stored hash
    const isPasswordValid = await comparePassword(
      password,
      user.passwordHash
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Login successful
 return res.status(200).json({
  message: "Login successful",
  token,
  user: {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
  },
});
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};