import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  try {
    let token = req.cookies?.accessToken;

    // Keep Bearer-token support temporarily
    if (!token) {
      const authHeader = req.headers.authorization;

      if (authHeader?.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
      }
    }

    if (!token) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = {
      id: decoded.userId,
    };

    next();
  } catch (error) {
    console.error("Authentication error:", error);

    return res.status(401).json({
      message: "Invalid or expired authentication",
    });
  }
};