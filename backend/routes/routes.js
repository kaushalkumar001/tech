import express from 'express';
import { createComplaint, login, signup } from '../controller/userController.js';
import verifyToken from '../middleware/verifyToken.js'; // Import the middleware

const route = express.Router();

route.post('/login', login);
route.post('/signup', signup);
route.post('/complaints', verifyToken,createComplaint); // Add middleware here

export default route;