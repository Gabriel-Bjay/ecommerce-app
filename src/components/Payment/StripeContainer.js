const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51N1As3DRIsEHj72wOx4xJXZbPNvyjxeiZWEZ3LYfW6d5ghit4KidP1u4zZElDlgW9Ty4Pspym6qlCa9iSUdjyYMt00KmmRCDVU');

app.use(express.json());

// Endpoint to create a payment intent
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency } = req.body;

    // Create a payment intent using the Stripe API
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      // Add additional options as needed
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the payment intent.' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});

