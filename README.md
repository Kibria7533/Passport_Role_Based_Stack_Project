# Toolbox 

```javascript
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


```
Lets take a look on our models .[Er diagram here](https://dbdiagram.io/d/60c8987c0c1ff875fcd4ef27)

```javascript
user={
    id:String,
    name:String,
    email:String,
    password:String,
    role:{enum:[gen_customer,whole_seller,bike_share,admin]},
    active_Token:String,
    history:[{
        i dont know what to do here-kibria
    }]
}
```
```javascript
profile={
    id:String,
    user_id:String,
    mobile:String,
    imgage:{id:String,img:String},
    address:[{state:String,dist:String,thana/city:String,Street/H.n:String}]
    }
```
```javascript
product={
   id:String,
   name:String,
   sku_number:String,
   price:Number,
   discount:
   cate_id:String,
   variant:String,
   stock:{enum:[out_of_stock,in_stock,running_low]},
   images:[{id:String,img:String}],
   description:String,
   brand:String ,
   reviews:[{id:String,user_id:String,rating:Number,review:String,createdAt:String}]
    }
```

```javascript
category={
  id:String,
   cate_name:String,
    }
```

```javascript
orders={
    
    id: type:String,
    userid:{ type: Schema.Types.ObjectId, ref: 'User'},
    paymentid:String,
    products:[{
    id:String,
    qty:String,
    product_id:String
    }],
    address:String,
    total:type:String,
    orderstatus:String,
    paymentmethod:String,
    }
```
------------- We will here define  structure of our cart  and wishlist ------------
```javascript
cart={
    image:{id:String,img:String},
    product_name:String,
    model:String,
    quantity:String,
    unit_price:String,
    total:Number
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
| End Point | Data  |http rq type | Description    | Auth |
| ------ | ------ |---------| ------------ | ------ |
| /signup | {name,email,password,acc_type}  |POST-201 |{name,email,password,acc_type} is mandetory other profile can be skipped while initial signup |N/A |
| /signin |{email,password}  |POST-201 |All user have the same signin route | N/A|
| /signout |{}  |POST-200 |as usual sigout process will remove token from user cookie and redirected to home page |Auth|
| /profile/:id | {user-info} |GET|will return whole user profile and with corespond history| |authenticate(any) |
| /profile-update/:id |{update-user-info} | POST-201 |we will use same end point but can update piece of data clicking a save button on saveral section|authenticate(any) |
| /forget-password/ |{user.email} |POST-200|customer will provide his/her email to have a passwors change mail with a issued token |any-user |
| /forget-password-change |{new-password,token} |POST-200|customer will provide his/her new password with issued token |any-user(having issued token) |
| /google/fb/twitter-login |tap |POST-200|By requisting on this end point will return with some portion of login credentials(for first time and user have to provide rest datas) but on credentials existense it will redirected to where he left|any-user|

## Products-End Points(This end points will be implemented as gql query)

| End Point | Data  |http rq type | Description    | Auth |
| ------ | ------ |---------| ------------ | ------ |
|/product_creat/|
|/product_get/|
|product_update/:id|
|product_by_variant/:model|


## Order-End Points

| End Point | Data  |http rq type | Description    | Auth |
| ------ | ------ |---------| ------------ | ------ |



## History-End Points

| End Point | Data  |http rq type | Description    | Auth |
| ------ | ------ |---------| ------------ | ------ |







  
  
