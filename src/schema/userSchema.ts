import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        password: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now()
        }
    },
    {strict: false}
);

export default mongoose.model('user', UserSchema);
