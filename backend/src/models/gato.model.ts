import mongoose, { Schema, Document } from 'mongoose';

export interface IGato extends Document {
  name: string;
  description: string;
  origen: string;
  imagen: string;
}

const GatoSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  origen: { type: String, required: true },
  imagen: { type: String, required: true }
});

const GatoModel = mongoose.model<IGato>('Gato', GatoSchema);

export default GatoModel;
 
