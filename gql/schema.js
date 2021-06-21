'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

// Define our schema using the GraphQL schema language
const typeDefs = `
  type User {
    _id: ID!
    firstName:String
    lastName:String
    acc_type:String
    image:Image
    address:address
    username: String
    email: String
    acc_status:String
    role: String
  }
  type address{
    addressLine1:String
    addressLine2: String
    city: String
    region: String
    country: String
    postalCode: String
    countryCode: Int

  }
 
  type product{
    _id:String
   name:String
   sku_number:String
   price:Int
   discount:Int
   cate_id:String
   variant:String
   stock:String
   images:[Image]
   description:String
   brand:String 
   reviews:Review
  }
  type Review{
    comment:String
    star:String
    date:String
    user:User
  }

  type order{
    user:User
    region:String
    status:String
    coupon:Coupon
    discount:Int 
    shipping_cost:Int 
    payment:payment
    order_status:String 
    products:[product]
    billing_address:address 
    shipping_address:address 
    customer_comments:Review
    refund_item:[product] 
    netAmount:Int

  }
  type payment {
    key:String
   time :String
  issuer:String
  prod_rec:String
  }
  type Coupon {
  id: String
  type: String
	code: String
	amount: Int
	minSpent: Int
	maxSpent: Int
	quantity: Int
	onCart: String
	categories: Category
	products:product
	expire: String
  }
  type Category{
    CateName:String
    Image:[Image]
    description:String

  }
  type Image {
    src:String
    alt:String
    name: String
    id: String
    timestamp: String
  }
  type cart{
    id: String
    qty: Int
    price:Int
  }
  type wishlist{
    id: String
    qty: Int
    price:Int
  }
  type Query {
    user(id:String!):User
    product(id:String!):product
    recent_products(start:String,end:String):product
    product_by_category(cate_name:String!):product
    product_by_variant(productId:String!):product
    orders_by_id(id:String):order 
  }
  type Mutation {
    signup (username: String!, email: String!, password: String!): User
    login (email: String!, password: String!): String
    create_product(name:String!,cate_name:String,price:Int,discount:Int,variant:String,stock:String,images:String):product
    update_product(id:ID,name:String!,cate_name:String,price:Int,discount:Int,variant:String,stock:String,images:String): product
    create_order(user_id:String,status:String,coupon:Int):order
    update_order(id:ID,name:String,netPrice:String):order
    set_coupon(type:String,code:String,minSpent:Int,maxSpent:Int,product:String,categories:String):Coupon 
    update_coupon(type:String,code:String,minSpent:Int,maxSpent:Int):Coupon
    add_to_cart(id:String):cart
    remove_from_cart(id:String):cart 
    add_to_wishlist(id:String):wishlist
    remove_from_wishlist(id:String):wishlist
    addReview(id:String,comment:String,star:String,date:String):Review
    addHistory(id:ID,type:String,context:String,key:String,value:String):User

  }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })