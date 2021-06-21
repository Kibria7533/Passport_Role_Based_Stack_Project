const { Schema, model } = require("mongoose");

const ProfileSchema = new Schema(
  {
    
	userId: { type: Schema.Types.ObjectId, ref: 'User'},
	firstName: String,
	lastName: String,
	email: String,
	username: String,
	accountType:{
        type: String,
        default: "standard",
        enum:['rider', 'wholesaler', 'standard']
      } ,
	profilePicture:Image,
	billingAddresses: [{ Address }],
	shippingAddresses: [{ Address }],
	wishlist: [{ 
        produt_id:{ type: Schema.Types.ObjectId, ref: 'Product'}
    }],
	orderHistory: [{ 
        order_id:{ type: Schema.Types.ObjectId, ref: 'Order'}
    }],
	refundHistory: [{ 
        refund_id:{ type: Schema.Types.ObjectId, ref: 'Refund'}
    }],
	activities: [Activity],
	totalSpent: {type:Number, default:"0"},
	discounts: {
		type: 'percentage' || 'fixed',
		amount: 5 || 500,
	},
	freeShipping: true,
  },
  { timestamps: true }
);

const Address = {
	addressLine1: '',
	addressLine2: '',
	city: '',
	region: '',
	country: '',
	postalCode: '',
	countryCode: '',
};

const Activity = {
	type: String,
	context: String,
	meta: [
		{
			key: 'product',
			value: String,
		},
		{
			key: 'place',
			value: String,
		},
		{
			key: 'url',
			value: String,
		},
	],
	message: String,
};

const Image = {
	src: '',
	alt: '',
	name: '',
	id: '',
	timestamp: Date,
};
module.exports = model("profile", ProfileSchema);
