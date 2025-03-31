import mongoose from 'mongoose';
const { Schema } = mongoose;
const complaintSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },

    block: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    issue: {
        type: String,
        required: true
    },
    
    createdOn: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

export const Complaint = mongoose.model('Complaint', complaintSchema);
