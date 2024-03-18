import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
    clerkId: {
        type: String,
        require: true
    },
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    avatar: {
        public_id: {
            type: String,
        }
    },
    creditBalance: {
        type: Number,
        default: 10,
    },
    role: {
        ISADMIN: {
            type: Boolean,
            default: false
        }
    }


})


const User = models?.User || model('User', userSchema);

export default User;