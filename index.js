const cors = require("cors");
const exp = require("express");
const bodyParser = require('body-parser')
const passport = require("passport");
var mongoose = require('mongoose');
const jwt = require('express-jwt')
const schema = require('./gql/schema')
const { graphqlHTTP } = require('express-graphql');


// Bring in the app constants
const { DB, PORT } = require("./config");

// Initialize the application
const app = exp();

// Middlewares
app.use(cors());
app.use(passport.initialize());

require("./middlewares/passport")(passport);

mongoose.connect('mongodb://localhost:27017/test' ,{useNewUrlParser:true,useUnifiedTopology:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("database connected");
});

// User Router Middleware
app.use("/auth/users", require("./routes/users"));
const auth = jwt({ secret:  process.env.JWT_SECRET, algorithms: ['RS256'] ,credentialsRequired: false});

app.use(
  '/api',
  bodyParser.json(),
  auth,
  graphqlHTTP(req => ({
    schema,
    context: {
      user: req.user,
      email: req.email,
      role: req.role
    },
    graphiql: true,
  }))
)


app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}/api`)
})