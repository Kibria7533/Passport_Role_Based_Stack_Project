# Toolbox 
Lets take a look on our models

```javascript
user={
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
    user_id:String,
    mobile:String,
    imgage:{id:String,img:String},
    address:[{state:String,dist:String,thana/city:String,Street/H.n:String}]
    }
```
```javascript
product={
   name:String,
   sku_number:String,
   price:Number,
   cate_id:String,
   variant:String,
   stock:{enum:[out_of_stock,in_stock,running_low]},
   images:[{id:String,img:String}],
   description:String,
   brand:String ,
   reviews&rating:[{id:String,rating:Number,review:String}]
    }
```

```javascript
category={
   cate_name:String,
   stock:{enum:[out_of_stock,in_stock,running_low]},
   images:[{id:String,img:String}],
   description:String
    }
```

```javascript
orders={
  userid:{ type: Schema.Types.ObjectId, ref: 'User'},
    orderid: type:String
    paymentid:String,
    products:type: Array,
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
| /signout |{user_id}  |POST-200 |as usual sigout process will remove token from user cookie and redirected to home page |N/A|
| /profile/:id | {user-info} |GET|will return whole user profile and with corespond history| |authenticate(any) |
| /profile-update/:id |{update-user-info} | POST-201 |we will use same end point but can update piece of data clicking a save button on saveral section|authenticate(any) |
| /forget-password/:email |{user.email} |POST-200|customer will provide his/her email to have a passwors change mail with a issued token |any-user |
| /forget-password-change/:token |{new-password,token} |POST-200|customer will provide his/her new password with issued token |any-user(having issued token) |
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







  
  
