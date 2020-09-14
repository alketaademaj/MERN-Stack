const mongoose=require('mongoose');
const productSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    discountPercentage: { type: Number , required: true , default: 0 },
    color: { type: String },
    size: { type: String},
    category: { type: String },
    stock: { type: Number },
    image: [{URL:{type: [String] },caption: { type: String }}],
    created: { type: Date, default : () => new Date()},
  }, {
    timestamps:true,
  });
  
  const Product=mongoose.model('Sivu-Product',productSchema);
  module.exports=Product;

  
  