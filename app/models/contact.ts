import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
        minLength: [2, "Name must be larger than 2 characters"],
        maxLength: [50, "Name must be lesser than 50 characters "]
    },

    email: {
        type: String,
        required: [true, "email is required."],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address."],
    },

    message: {
        type: String,
        required: [true, "Message is required."],
    },

    date: {
        type: Date,
        default: Date.now,
    },

});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema)

export default Contact;
