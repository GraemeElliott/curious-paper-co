const dotenv = require ("dotenv");
const Stripe = require ("stripe")



dotenv.config();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

const stripePayment = async (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "gbp"
    }, (stripeError, stripeResponse) => {
        if (stripeError) {
            res.status(500).json(stripeError)
        }
        else {
            res.status(200).json(stripeResponse)
        }
    })
}

exports.stripePayment = stripePayment;