const { Schema, model } = require("mongoose");

const OrderSchema = new Schema(
  {
    
	user_id:{ type: Schema.Types.ObjectId, ref: 'User'},
    region:String,
    status:{
        type: String,
        default: "pending",
        enum:["pending","accepted","on the way","recived"]
      },
    coupon:Boolean,
    discount:Number,
    shiiping_cost: 128 || false,
    delivary_payment:[{
        key:"oncash",
        time :Date,
        issuer:String,
        reciver:String
    },
    {
        key:"paid",
        timestap:true,
        paymentType:[{
            key:"card",
            "toekn":String,
            amount:Number,
            issuer:String,
            reciver:String
       
            
        },{
             key:"paypal",
             token:String,
             amount:Number,
             issuer:String,
             reciver:String
             
        }
        
        ]
    }],
    order_status_meta_data:[
       	{
			key: 'pending',
			date:Date,
		},
		{
			key: 'accepted',
			date:Date,
		},
		{
			key: 'on the way',
			date:Date,
		},
    ],
    shipping_taxes:Number,
    	meta: [
		{
			key: 'pending',
			date:Date,
		},
		{
			key: 'accepted',
			date:Date,
		},
		{
			key: 'on the way',
			date:Date,
		}],
		issuer_operator:{ type: Schema.Types.ObjectId, ref: 'User'},
		products:[{
		    id:String,
		    productId:{ type: Schema.Types.ObjectId, ref: 'Product'},
		    price:Number,
		    qty:Number
		}],
	billingAddresses: [{ Address }],
	shippingAddresses: [{ Address }],
	on_compleate_coutomer_riview:{
	    id:String,
	    userID:{ type: Schema.Types.ObjectId, ref: 'User'},
	    cmments:String
	},

	refund:Boolean,
	refunditem:[{
	    id:String,
	    productId:{ type: Schema.Types.ObjectId, ref: 'Product'},
	    qty:Number,
	    price:Number
	}],
	netAmount:Number
  },
  { timestamps: true }
);

module.exports = model("order", OrderSchema);
