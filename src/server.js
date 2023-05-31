require('dotenv').config()

const express= require ('express')
const app = express()
const fs = require('fs')
const cors = require('cors');
app.use(cors());

app.use(express.json())
app.use(express.static("components"))
app.post('/create-checkout-session', async(req,res) => {
    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map(item =>{
                const storeItem = storeItems.get(item.id)
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItem.name,
                            images: [storeItem.image]
                            },
                            unit_amount: storeItem.price
                    },
                    quantity: item.quantity
                }
            }),
            success_url:`${process.env.SERVER_URL}/success.html`,
            cancel_url: `${process.env.SERVER_URL}/cancel.html`
        })
        res.json({ url: session.url })
    }catch(e){
        res.status(500).json({error: e.message})
    }
})

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = JSON.parse(fs.readFileSync('./products.json', 'utf8'));

app.listen(3000)    