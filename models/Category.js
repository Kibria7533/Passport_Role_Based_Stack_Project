const { Schema, model } = require("mongoose");

const CategorySchema = new Schema(
  {
    
	CateName:String,
    Image:[Image],
    description:String
    
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
module.exports = model("category", CategorySchema);
