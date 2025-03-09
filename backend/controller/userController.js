import User from '../model/model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Login Controller
export const login = async (req, res) => {
    try {
        // Get data from request body
        const { email, password } = req.body;

        // Validate data
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required, please try again."
            });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User does not exist, please sign up first."
            });
        }

        // Check password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Incorrect password."
            });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id, email: user.email, role: user.usertype }, process.env.SECRET, {
            expiresIn: "1h"
        });
        

        // Send response with token
        res.status(200).json({
            success: true,
            message: "Logged in successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                usertype: user.usertype
            }
        });

    } catch (err) {
        console.error("Login Error:", err);
        return res.status(500).json({
            success: false,
            message: "Login failed, please try again."
        });
    }
};

// Signup Controller
export const signup = async (req, res) => {
    try {
        // Extract user details
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists, please log in."
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        // Send response
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        });

    } catch (err) {
        console.error("Signup Error:", err);
        return res.status(500).json({
            success: false,
            message: "Signup failed, please try again."
        });
    }
};
