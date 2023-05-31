const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")("sk_test_51N1As3DRIsEHj72wOx4xJXZbPNvyjxeiZWEZ3LYfW6d5ghit4KidP1u4zZElDlgW9Ty4Pspym6qlCa9iSUdjyYMt00KmmRCDVU");

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello World!"));

exports.api = functions.https.onRequest(app);



// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
