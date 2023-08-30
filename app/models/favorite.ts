import { Schema, models, model } from "mongoose";


const favoriteSchema = new Schema({
    id: {
        type: String,
        required: [true, "id character is required."],
        // trim: true, nos permite formatear los espacios adicionales al principio y al final del string que se reciba en este dato
    },
    userId: {
        type: String,
        required: [true, "userId is required."],
    }
})

const Favorite = models.Favorite || model("Favorite", favoriteSchema)


export default Favorite
