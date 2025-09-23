const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Login, Signup } = require('./controllers/Auth');
const authMiddleware = require('./middlewares/AuthMiddleware');

const secret = process.env.JWT_SECRET;

//Controllers
const { Holdings } = require("./controllers/Holdings");
const { Position } = require("./controllers/Position");
const { allHoldings, allPositions } = require("./controllers/FetchingData");
const { newOrder } = require("./controllers/Orders");

dotenv.config();

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    cors({
      origin: ["http://localhost:5173", "http://localhost:5174"],
      methods: ["GET", "POST", "PUT", "PATCH","DELETE"],
      credentials: true,
    })
  );

//Routes
app.get("/holdings", authMiddleware,Holdings);
app.get("/positions", authMiddleware, Position);
app.get("/allholdings", authMiddleware, allHoldings);
app.get("/allpositions", authMiddleware, allPositions);

// Auth
app.post('/auth/login', Login);
app.post('/auth/signup', Signup);

//Orders
app.post("/newOrder", newOrder);

//Dbconnection
let dbConnect = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URL)
        console.log("MongoDB Connected!");
    } catch (error) {
        console.log("Mongodb Connection error", error);
    }
}

//Starting Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    dbConnect()
});
