const { Schema, model } = require("mongoose");

const CouponSchema = new Schema(
  {
    
	coupon_type:{
		type:String,
		default: "fixed",
		enum:['fixed','percentage']
	} ,
	code: String,
	amount: Number,
	minSpent: {type:Number, default:"5000"},
	maxSpent: {type:Number, default:"50000"},
	quantity: Number,
	onCart: {type:Boolean, default:true}, // apply on cart amount
	categories: [{id:{ type: Schema.Types.ObjectId, ref: 'Category'}}],
	products: [{id:{ type: Schema.Types.ObjectId, ref: 'Product'}}],
	expire: Date,
  },
  { timestamps: true }
);

module.exports = model("coupon", CouponSchema);
