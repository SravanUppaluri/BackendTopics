import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server Started at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Failed !!", err);
  });
