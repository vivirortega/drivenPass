import authRepository, { checkEmail, CreateUser, insert } from "../repositories/authRepository.js";
import bcrypt from "bcrypt";

async function signUp(userData: CreateUser) {
    const {email, password} = userData;
    const userExists = await checkEmail(email);
    if (userExists) {
        throw {
            type: "unauthorized",
            message: "email already registered"
        }
    }
    const SALT = 10;
    userData.password = await bcrypt.hash(password, SALT);
    await insert(userData);
}

const authService = { signUp };
export default authService;
