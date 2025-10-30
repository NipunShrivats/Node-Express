import mongoose from "mongoose";

const url =
  "mongodb+srv://nipunrawat16_db_user:gqLyKnjfO440p3IF@cluster0.6kvumxm.mongodb.net/";
mongoose
  .connect(url)
  .then(() => console.log("database connected successfully"))
  .catch((e) => console.log("Connection error:", e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// user model - model will be stored with name "user".
const User = mongoose.model("user", userSchema);

async function runQueryExamples() {
  try {
    // 1. create a new document
    // const newUser = await User.create({
    //   name: "John Doe",
    //   email: "John90@gmail.com",
    //   age: 100,
    //   isActive: false,
    //   tags: ["Shopkeeper", "DadaJi", "Newspaper Reader"],
    // });

    // await newUser.save();
    // console.log("Created new user:", newUser);

    //// 2. finding the data
    // const allUsers = await User.find({});
    // console.log("allUsers:", allUsers);

    // 3. finding using specific field
    const getUser = await User.find({ isActive: false });
    console.log("getUser:", getUser);

    // 4.
  } catch (e) {
    console.log("Error", e);
  } finally {
    await mongoose.connection.close();
  }
}
runQueryExamples();
