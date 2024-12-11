import { User } from "../model/user.js";

export const register = async (req, res) => {
    try {
        const { email, name, password, confirmPassword } = req?.body;


        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({ success: false, message: "Email already exists" })
        }

        if (password !== confirmPassword) {
            return res.json({ success: false, message: "Password doesn't match" })
        }

        const user = await User.create({ email, name, password });

        if (user) {
            return res.json({ success: true, message: "user created successfully", data: user })
        }

        return res.json({ success: false, message: "some error occured" })
    } catch (error) {

        console.log("/register", error.message)
        return res.json({ success: false, message: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req?.body;

        const checkUser = await User.findOne({ email });

        if (!checkUser) {
            return res.json({ success: false, message: "Email doesn't match" });
        }

        if (password !== checkUser.password) {
            return res.json({ success: false, message: "incorrect password" });
        }

        return res.json({ success: true, message: "user Logged in successfully", data: checkUser })

    } catch (error) {
        console.log("/login", error.message)
        return res.json({ success: false, message: error.message })
    }
}