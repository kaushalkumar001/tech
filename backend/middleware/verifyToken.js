import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const verifyToken = (req, res, next) => {
  try {
    // 1. Get token from various sources
    const token = 
      req.cookies?.token || 
      req.header('Authorization')?.replace('Bearer ', '') ||
      req.query?.token;

    // 2. Check if token exists
    if (!token) {
      return res.status(401).json({ 
        success: false,
        message: 'Authorization token required',
        code: 'MISSING_TOKEN'
      });
    }

    // 3. Verify token synchronously for better error handling
    const decoded = jwt.verify(token, process.env.JWT_SECRET || process.env.SECRET);
    
    // 4. Validate token payload structure
    if (!decoded?.id) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token payload',
        code: 'INVALID_PAYLOAD'
      });
    }

    // 5. Attach standardized user object to request
    req.user = {
      id: decoded.id,
      email: decoded.email || null,
      role: decoded.role || 'user',
      // Add other claims as needed
    };

    // 6. Continue to the next middleware/route
    next();

  } catch (err) {
    console.error('Token verification error:', err.message);

    // Handle specific JWT errors
    let message = 'Invalid token';
    let code = 'INVALID_TOKEN';

    if (err instanceof jwt.TokenExpiredError) {
      message = 'Token expired';
      code = 'TOKEN_EXPIRED';
    } else if (err instanceof jwt.JsonWebTokenError) {
      message = 'Invalid token signature';
      code = 'INVALID_SIGNATURE';
    }

    return res.status(401).json({
      success: false,
      message,
      code,
      // Only include stack trace in development
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
};

export default verifyToken;