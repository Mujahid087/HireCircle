import { User } from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;

        // Check if all required fields are present
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false,
            });
        }

        // Check if the email already exists in the database
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already exists with this email.",
                success: false,
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role: role.toLowerCase(), // Optional: normalize the role to lowercase
        });

        // Send success response
        return res.status(201).json({
            message: "Account created successfully.",
            success: true,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "An error occurred while creating the account.",
            success: false,
            error: error.message, // Include error message for debugging (optional)
        });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "something is missing",
                success: false,
            })
        };
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: "incorrect email or password",
                success: false,
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "incorrect email or password",
                success: false,
            })

        }
        // check role is correct or not 
        if (role !== user.role) {
            return res.status(400).json({
                message: "account doesn't exists with current role",
                success: false,
            })
        }
        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
            expiresIn: "1d"
        })

        user = {

            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile

        }


        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: `welcome back ${user.fullname}`,
            user,
            success: true,
        })
    } catch (error) {
        console.log(error)

    }
}
export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "logged out successfully",
            success: true
        })
    } catch (error) {
        console.log(error)

    }
}

export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body

        const file = req.file



        //  cloudinary ayega idhar


        let skillsArray;
        if (skills) {
            skillsArray = skills.split(",");
        }



        const userId = req.id; //middleware authentication
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User Not found",
                success: false
            })
        }

        // updating the data
        if (fullname) { user.fullname = fullname }
        if (email) user.email = email
        if (phoneNumber) user.phoneNumber = phoneNumber
        if (bio) user.profile.bio = bio
        if (skills) user.profile.skills = skillsArray

        //resume comes later here.. 


        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile,
        }

        return res.status(200).json({
            message: "Profile Updated Successfully",
            user,
            success: true,
        })
    } catch (error) {
        console.log(error)

    }
}