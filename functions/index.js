const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")(
    'sk_test_51Hx5SGFr9rZEOOUfoEOQoKDgMtDOw9WUqWLqRzvJ7pn7iOvdV710q8fNWIlgOhbggf4sWm5rLuyC0ny68xVoDyq100NZpDhZJU'
);

// API


// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent= await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);