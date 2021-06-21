const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    
	name:String,
   sku_number:String,
   price:Number,
   discount:Number,
   cate_id:String,
   variant:String,
   stock:{
    type: String,
    default: "standard",
    enum:['rider', 'wholesaler', 'standard']
  },
   images:Image,
   description:String,
   brand:String ,
   reviews:[{id:String,user_id:String,rating:Number,review:String,createdAt:String}]
  },
  { timestamps: true }
);

const Image = {
	src: '',
	alt: '',
	name: '',
	id: '',
	timestamp: Date,
};

module.exports = model("product", ProductSchema);
