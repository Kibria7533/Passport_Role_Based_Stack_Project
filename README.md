# Toolbox 
Lets take a look on our models .[Er diagram here](https://dbdiagram.io/d/60c8987c0c1ff875fcd4ef27)

```javascript
const User = {
	id: 'userId',
	accountStatus: ['pending', 'approved', 'suspended', 'rejected'],
	email: '',
	profile: {
		ref: 'profile',
	},
	roles: {
		admin: 10,
		editor: 8,
		user: 1,
		sales: 3,
		support: 3,
	},
	authStrategy: {
		local: {
			type: 'local',
			password: '',
			passwordResetToken: '',
			activationToken: '',
			emailVerified: true,
			phoneVerified: true,
		},
		facebook: {
			id: '',
			token: '',
		},
		google: {
			id: '',
			token: '',
		},
	},
	timestamp: Date,
};
const Profile = {
	userId: {
		ref: 'user',
	},
	firstName: '',
	lastName: '',
	email: '',
	username: '',
	accountType: ['rider', 'wholesaler', 'standard'],
	profilePicture: Image,
	billingAddresses: [{ Address }],
	shippingAddresses: [{ Address }],
	wishlist: ['id1', 'id2'],
	orderHistory: ['order-id1', 'order-id2'],
	refundHistory: ['refund-id1', 'refund-id2'],
	activities: ['activity-id1', 'activity-id2'],
	totalSpent: 0,
	discounts: {
		type: 'percentage' || 'fixed',
		amount: 5 || 500,
	},
	freeShipping: true,
	timestamp: Date,
};
const Image = {
	src: '',
	alt: '',
	name: '',
	id: '',
	timestamp: Date,
};
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
	id: '',
	type: 'click',
	context: 'browsing',
	meta: [
		{
			key: 'product',
			value: 'product id',
		},
		{
			key: 'place',
			value: 'add-to-cart',
		},
		{
			key: 'url',
			value: '/?ref=fb&action=shop',
		},
	],
	message: '',
};
/**
 * Order
 * - order object
 * - order line item
 * - discounts and coupons
 * - taxes on cart
 * - shipping costs
 * - taxes on shipping
 * - update activity
 * - update total spent
 * - recalculate discounts
 * - update inventory
 * - recalculate coupon quantity
 */
const Coupon = {
	type: 'fixed' || 'percentage',
	code: 'OFFER-101',
	amount: 10,
	minSpent: 2000,
	maxSpent: 10000,
	quantity: 25,
	onCart: true, // apply on cart amount
	categories: ['category-id1', 'category-id2'],
	products: ['product1', 'product2', 'product3'],
	expire: Date,
};

const order={
    user_id:"user-id",
    region:String,
    status:["pending","accepted","on the way","recived"],
    coupon:true;
    discount:10;
    shiiping_cost: 128 || false,
    delivary&payment:[{
        key:"oncash",
        time :Date,
        provider:{
            name:String,
            mobile:String,
            client-relation-String
        }
    },
    {
        key:"paid",
        timestap:true,
        paymentType:[{
            key:"card",
            "toekn":String,
            amount:Number,
            userInfo:{}
       
            
        },{
             key;"paypal",
             token:String,
             amount:Number,
             userInfo:{}
             
        }
        
        ]
    }
    
    
    ]
    payment_status_meta_data:[
       	{
			key: 'pending',
			date:Date,
		},
		{
			key: 'accepted',
			date:Date,,
		},
		{
			key: 'on the way',
			date:Date,
		},
    ]
    shipping_taxes:Number,
    	meta: [
		{
			key: 'pending',
			date:Date,
		},
		{
			key: 'accepted',
			date:Date,,
		},
		{
			key: 'on the way',
			date:Date,
		},
		issuer:user_id,
		products;[{
		    id:String,
		    productId:'productId',
		    price:Number,
		    qty:Number
		}],
	billingAddresses: [{ Address }],
	shippingAddresses: [{ Address }],
	on_compleate_coutomer_riview:{
	    id:String,
	    userID:"String",
	    cmments:String
	},
	refund:true
	refunditem:[{
	    id:String,
	    productId:String,
	    qty:Number,
	    price:Number
	}],
	netAmount:Number
    timeStamp:true
    
}


```

## Features of this toolbox site

- Here will be four type users of this site(admin,general-customer,wholeseller,bike-share-customer)
- There will be variants discount on different types pursage(bike-share-pursage or wholeseller-pursage etc..)
- Any customer can choose different category products and can also choose variants according to products model
- Toolbox provide coopn token for special event
- All types users can add profile details while registrations or after login meanwhile he/she can add product to his cart and can update cart or wishlist at any time.
- But for a succesfull pursage a customer must have to fill his/her shipping/product-reciving address.
- A customer can check his/her previous activites or history
- All customer can truck his order status and ofcourse can give toolbox a authenticate riview and comment
- Customers can login using google account,facebook etc socila media

   




#  Lets take a look on our AUTHENTICATION & AUTHORIZATION RestApi documentation

As we intend to use Graphql for rest of our end point we will see these latter on this section.
.
## User&Profile
| Name | End Point | Data  |http rq type | Description    | Scope|
|---| ------ | ------ |---------| ------------ | ------ |
|registration| /signup | {name,email,password,acc_type}  |POST-201 |{name,email,password,acc_type} is mandetory other profile can be skipped while initial signup |N/A |
|login| /signin |{email,password}  |POST-201 |All user have the same signin route | N/A|
|logout| /signout |{}  |POST-200 |as usual sigout process will remove token from user cookie and redirected to home page |Auth|
|get profile | /profile/:id | {user-info} |GET|will return whole user profile and with corespond history| |authenticate(any) |
|update_profile | /profile-update/:id |{update-user-info} | POST-201 |we will use same end point but can update piece of data clicking a save button on saveral section|authenticate(any) |
|password reset link send| /forget-password/ |{user.email} |POST-200|customer will provide his/her email to have a passwors change mail with a issued token |any-user |
|save new password| /forget-password-change |{new-password,token} |POST-200|customer will provide his/her new password with issued token |any-user(having issued token) |
|social login| /google/fb/twitter-login |tap |POST-200|By requisting on this end point will return with some portion of login credentials(for first time and user have to provide rest datas) but on credentials existense it will redirected to where he left|any-user|

## Products-End Points(This end points will be implemented as gql query /api)

| Name | type  |gql schema name| res |Description    | Scope|
|--- |  ------ |---------| ------------ | ------ |------|
|product creation|mutation| create_product(Product model) | product | To create a product to our store with categories and variant | admin
|get single product | query |product(ID) | product | get a single product and its reviews | users
|update a single product |mutation | update_product(ID,...data) | product | to update a single product we need id and updated data | admin 
|get product by variant | query|product_by_variant(productId) | products | if we select a product and this end point will return coresponding variants | user
|get product by price range | query | get_pro_by_range(min:Int max:Int) | products | To get products by its product range | users
|get a users order | query | orders_by_id(ID) | order | This end points will return all orders |auth-user
|create a order | mutation | create_order(order model) | order ||auth-user|
|update a order | mutation | update_order(id ,updated data)| order | |admin|
|add a history | mutation | addHistory(id,...data) | history | |auth-user|
| set coupon | mutation | set_coupon(type ,...data) | coupon ||admin|
| update coupon | mutation | update_coupon (type ,...data)| coupon | |admin |
| get coupon | query | get_coupon() | coupon ||auth-user|
|add to cart | mutation | add_to_cart(id:String) | cart |auth-user|
| delete from cart | mutation | remove_from_cart(id:String) | {} ||auth-user|
|add to wishlist | mutation | add_to_wishlist(id:String) | {} | |auth-user|
| delete from wishlist | mutation | remove_from_wishlist (id:String) |  {} |delete from wish list and also from |auth-user|
|  add review | mutation |  addReview(id:String, ..data ) | reviews | To add a reviews with coresponding comments |auth-user|





  
  
