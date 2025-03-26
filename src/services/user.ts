import { CraeteUserAttributes, user } from "../models/user";
import { createPasswordHash } from "../utils/password";

export const createUser = async (userInfo: CraeteUserAttributes) => {
    try {
        doesFieldExist(userInfo.email);
        doesFieldExist(userInfo.password);
        validateUserInfo(userInfo);

        const hashedPassword = await createPasswordHash(userInfo.password);
        const userDetailsToSave: CraeteUserAttributes = { ...userInfo, password: hashedPassword }

        const userDetais = await user.create(userDetailsToSave);
        return {
            "userId": userDetais.userId,
            "email": userDetais.email
        };
    }
    catch (error: unknown) {
        throw new Error(error instanceof Error ? error.message : JSON.stringify(error))
    }
}

export const doesUserExist = async (email: string) => {
    try {
        const userDetails = await user.findOne({ where: { email: email } });
        return userDetails;
    }
    catch (error: unknown) {

    }
}

const validateUserInfo = (userInfo: CraeteUserAttributes) => {
    const { email, password } = userInfo;
    if (!email.match(/.*\.com$/)) {
        throw new Error('Invalid email.')
    }



    if (
        password.length < 8 ||
        password.length > 13
    ) {
        throw new Error("Password should be greater than 8 characters and less than 13 characters.")
    }

    // if ((password.match(/[A-Z]+/) == null &&
    //     password.match(/[0-9]+/) == null &&
    //     password.match(/[a-z]+/) == null) == false) {
    //     throw new Error("Password should conatain one capital letter , one small letter , one number and one of the special characters(@,#,%,*,&)")
    // }
}

const doesFieldExist = (field: number | string) => {
    if (!field) {
        throw new Error(`${field} is required`);
    }
}