import { model, Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate'

const CarSchema = new Schema({
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand'
    },
    model: {
        type: String,
        required: true,
        trim: true
    },
    color: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},
    { collection: 'cars' }
)

CarSchema.plugin(mongoosePaginate)

export default model('Car', CarSchema);