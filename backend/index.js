require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs"); // ADD THIS
const jwt = require("jsonwebtoken"); // ADD THIS

const {HoldingsModel} = require("./model/HoldingsModel");
const {PositionsModel} = require("./model/PositionsModel");
const {OrdersModel} = require("./model/OrdersModel")
const User = require("./model/UserModel");


const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.get("/addHoldings", async(req, res)=> {
//     let tempHolding = [
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

// tempHolding.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });

//     newHolding.save();
// });

// res.send("Done!")
// })

// app.get("/addPositions", async(req ,res) =>{
//     let tempPositions = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];

//     tempPositions.forEach((item) =>{
//         let newPositions = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         })
//         newPositions.save();
//     });
//     res.send("Done!")

// });



app.get("/allHoldings", async(req, res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
    console.log("done:)")
} );

app.get("/allPositions", async(req, res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
    console.log("done:)")
} );

// app.post("/newOrder" , async(req, res)=> {
//     let newOrders = new OrdersModel({
//         name: req.body.name,
//         qty: req.body.qty,
//         price: req.body.price,
//         mode: req.body.mode,
//     });

//     newOrders.save();
//     res.send("order saved");
//  })

app.post("/newOrder", async (req, res) => {
    try {
        // 1. Save the record in the Orders collection (the history)
        const newOrder = new OrdersModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
        });
        await newOrder.save();

        // 2. Create a SEPARATE entry in the Holdings collection
        // Even if the stock "INFY" already exists, this creates a new row.
        const newHolding = new HoldingsModel({
            name: req.body.name,
            qty: req.body.qty,
            avg: req.body.price, // Since it's a new row, avg is just the buy price
            price: req.body.price, // Current market price
            net: "0.00%", 
            day: "0.00%",
            isLoss: false
        });
        await newHolding.save();

        res.status(201).send("Order placed and added as a new holding!");
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/allOrders", async(req,res)=> {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
    console.log("order done.")
})

app.post("/sellOrder", async (req, res) => {
    try {
        const { name, qty, price } = req.body;

        // 1. Check if the user actually has this stock in Holdings
        let existingHolding = await HoldingsModel.findOne({ name: name });

        if (!existingHolding) {
            return res.status(400).json({ message: "You do not own this stock." });
        }

        if (existingHolding.qty < qty) {
            return res.status(400).json({ message: "Insufficient quantity to sell." });
        }

        // 2. Save the Sell Order to History
        let newOrder = new OrdersModel({
            name,
            qty,
            price,
            mode: "SELL",
        });
        await newOrder.save();

        // 3. Update Holdings
        if (existingHolding.qty === qty) {
            // If selling all, remove the record
            await HoldingsModel.deleteOne({ _id: existingHolding._id });
        } else {
            // If selling partial, decrease the quantity
            existingHolding.qty -= qty;
            await existingHolding.save();
        }

        res.status(200).json({ message: "Sell order successful and holdings updated!" });

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/signup", async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // 1. Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists", success: false });
    }

    // 2. Create the user
    const user = await User.create({ email, password, username });

    res.status(201).json({
      message: "User registered successfully!",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login Attempt for:", email);

    const user = await User.findOne({ email });
    
    if (!user) {
      console.log("❌ USER NOT FOUND IN DB");
      return res.status(401).json({ message: "Invalid email or password", success: false });
    }

    console.log("Found User Hashed Password:", user.password);
    console.log("Password from Frontend:", password);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("✅ Password Match Status:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password", success: false });
    }

    // 3. Create a JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    res.status(200).json({
      message: "Login successful!",
      success: true,
      token, // Send this to the frontend
      username: user.username
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
});


app.listen(PORT , () => { 
    console.log("App Started!");
    mongoose.connect(URL);
    console.log("db connected");

});