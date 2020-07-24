import { model, Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate'

const BrandSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},
    { collection: 'brands' }
)

BrandSchema.plugin(mongoosePaginate)

export default model('Brand', BrandSchema);