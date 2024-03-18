

// USER TYPES PARAMS
declare type CreateUserParams = {
    firstname: string;
    lastname: string;
    email: string;
    password: string,
    avatar: object,
    role: {
        ISADMIN?: boolean
    }
}

// UPDATE USER PARAMS
declare type UpdateUserParams = {
    firstname: string,
    lastname: string,
    avatar: object,
    role: {
        ISADMIN?: boolean
    }
};

// SECCION TOKEN OPTIONS
declare type SessionOata = {
    _id?: string;
    username?: string;
    image?: string;
    ISADMIN?: boolean;
    isLogIn: boolean;
    isSubscribed?: boolean;
}

