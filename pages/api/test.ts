import NextCors from "nextjs-cors";
import db from "../../src/utils/firebase";

export default async (req, res) => {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  if (req.method === "GET") {
    const courses = [];
    const snapshot = await db.collection("test").get();
    snapshot.forEach((doc) => {
      courses.push(doc.data());
    });
    res.status(200).json(courses);
  }
};
