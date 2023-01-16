import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Please provide a user name.'],
        maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    userPwd: {
        type: String,
        required: [true, "Please provide a user password"],
        maxlength: [60, "Password cannot be more than 60 characters"],
    }
})

export default mongoose.models?.User || mongoose.model('User', UserSchema)
