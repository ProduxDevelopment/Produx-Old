import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
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
        },
        product: {
            type: [Array],
        }
    },
    {strict: false}
);

export default mongoose.model('user', UserSchema);
