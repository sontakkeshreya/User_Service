import * as  bcrypt from "bcrypt"

export const createPasswordHash = async (passwordString: string) => {
    return await bcrypt.hash(passwordString, 10)
}

export const comparePassword = async (passWordString: string, passwordHash: string) => {
    const isMatch = await bcrypt.compare(passWordString, passwordHash);
    return isMatch;
}
