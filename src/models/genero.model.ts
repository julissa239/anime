import mongoose from "mongoose";

export interface IGenero extends mongoose.Document {
    name: String;
}

const GeneroSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

export const Genero = mongoose.model<IGenero>("Genero", GeneroSchema);