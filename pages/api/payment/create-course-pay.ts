import NextCors from "nextjs-cors";
import generateUniqueId from "../../../src/utils/generateUniqueId";
import db from "../../../src/utils/firebase";
const Razorpay = require("razorpay");
var instance = new Razorpay({
  key_id: "rzp_test_iETuTIhZn6FzfF",
  key_secret: "7ABKD4uS4ETIU2cIkoVQCpnm",
});
export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  if (req.method === "POST" && req.body) {
    const {
      fullName,
      email,
      phoneNumber,
      maximumQualification,
      aadharNumber,
      organizationName,
      permanentAddress,
      course,
    } = req.body;
    const orderId = generateUniqueId();
    const order = await db.collection("rpto-registration").add({
      fullName,
      email,
      phoneNumber,
      maximumQualification,
      aadharNumber,
      organizationName,
      permanentAddress,
      course,
      paymentStatus: "pending",
      paymentId: orderId,
    });
    var options = {
      amount: 7900000, // amount in the smallest currency unit
      currency: "INR",
      receipt: orderId,
    };
    const razorpayOrder = await instance.orders.create(options);
    res.status(200).json(razorpayOrder);
  } else {
    res.status(401).json({ message: "Invalid Request" });
  }
}
