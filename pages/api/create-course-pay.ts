import NextCors from "nextjs-cors";
const Razorpay = require("razorpay");
var instance = new Razorpay({
  key_id: "rzp_test_rDYHFpRg2CClM4",
  key_secret: "VUPBu5GOoRho9SWSeHqf3o2N",
});
export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  if (req.method === "POST") {
    const { name } = req.body;
    var options = {
      amount: 7900000, // amount in the smallest currency unit
      currency: "INR",
      receipt: "order_rcptid_11",
    };
    const order = await instance.orders.create(options);
    res.status(200).json(order);
  }
}
