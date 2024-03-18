"use server";
import User from "../database/model/user.model";
import { ConnectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";


// CREATE USER 
export async function CreateUser(user: CreateUserParams) {
    try {
        await ConnectToDatabase();

        const Cuser = await User.create(user);


        return JSON.parse(JSON.stringify(Cuser));
    } catch (error) {
        handleError(error)
    }
};

// UPDATE USER
export async function UpdateUser(clerkId: string | null, user: UpdateUserParams) {
    try {
        await ConnectToDatabase();

        const updated_user = await User.findOneAndUpdate({clerkId}, user, { new: true })

        return JSON.parse(JSON.stringify(updated_user));
    } catch (error) {
        handleError(error)
    }
};

// READ USER
export async function getUserById(clerkId: string | null) {
    try {
        await ConnectToDatabase();

        const user = await User.findOne({ clerkId })

        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        handleError(error);
    }
};

// FIND USER BY E-MAIL
export async function getUserByEmail(email: string) {
    try {
        await ConnectToDatabase();
        const user = await User.findOne({ email });
        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        handleError(error);
    }
}

// DELETE USER 
export async function deleteUserById(clerkId: string | null) {
    try {
        await ConnectToDatabase();

        const check_user = await User.findOne({ clerkId });

        if (!check_user) {
            throw new Error("User does not exist");
        }

        const user = await User.findOneAndDelete({ clerkId });

        return user ? JSON.parse(JSON.stringify(user)) : null;
    } catch (error) {
        handleError(error);
    }
};

// USE CREDIT 
export async function updateCredits(user_id: string | null, creditFee: number) {
    try {
        await ConnectToDatabase();

        const updated_credit = await User.findByIdAndUpdate(
            { _id: user_id },
            { $inc: { creditBalance: creditFee } },
            { new: true });

        if (!updated_credit) throw new Error("User credit Update Failed");

        return JSON.parse(JSON.stringify(updated_credit));
    } catch (error) {
        handleError(error);
    }
};