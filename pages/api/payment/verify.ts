import NextCors from "nextjs-cors";
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
  if (req.method === "POST") {
    try {
      let body =
        req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;

      var crypto = require("crypto");
      var expectedSignature = crypto
        .createHmac("sha256", "7ABKD4uS4ETIU2cIkoVQCpnm")
        .update(body.toString())
        .digest("hex");
      var response = { signatureIsValid: false };
      if (expectedSignature === req.body.razorpay_signature)
        response = { signatureIsValid: true };
      const orderId = req.body.receipt;
      db.collection("rpto-registration")
        .where("paymentId", "==", orderId)
        .limit(1)
        .get()
        .then((query) => {
          const thing = query.docs[0];
          thing.ref.update({
            paymentStatus: "success",
          });
        });
      res.send(response);
    } catch (err) { 
      console.log(err);
    }
  }
}
