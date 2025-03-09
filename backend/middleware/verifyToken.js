import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

console.log("JWT SECRET:", process.env.SECRET); // Debugging to check if SECRET is loaded

const verifyToken = (req, res, next) => {
  // Get the token from cookies
  const token = req.cookies?.token; // Ensure 'cookie-parser' middleware is used

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    
    req.user = decoded; // Attach decoded token (including role) to the request
    next(); // Proceed to the next middleware/route handler
  });
};

export default verifyToken;
