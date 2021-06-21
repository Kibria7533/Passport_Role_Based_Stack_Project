const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    
	accountStatus:{
    type: String,
    default: "pending",
    enum:['pending', 'approved', 'suspended', 'rejected']
  }, 
	email: String,
	profile:{ type: Schema.Types.ObjectId, ref: 'Profile'},
	roles: {
		admin: {type: String, default:"10"},
		editor: {type: String, default:"10"},
		user: {type: String, default:"10"},
		sales: {type: String, default:"10"},
		support: {type: String, default:"10"},
	},
	authStrategy: {
		local: {
			type:  {type: String, default:"local"},
			password: String,
			passwordResetToken:String,
			activationToken: String,
			emailVerified: {type: Boolean, default:false},
			phoneVerified:  {type: Boolean, default:false},
		},
		facebook: {
			id: String,
			token: String,
		},
		google: {
			id: String,
			token: String,
		},
	}
  },
  { timestamps: true }
);

module.exports = model("user", UserSchema);
