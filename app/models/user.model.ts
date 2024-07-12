import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  LastName: String,
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  address: String,
  class: { type: String, required: true },
  session: { type: String, required: true },
  parents: {
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
  },
  contact: {
    email: { type: String, required: true, unique: true },
    phone: {
      mobile: { type: String, required: true },
      home: String,
    },
  },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "student" },
  image: { type: String, required: true },
});
const UserModel = models.User || model("User", UserSchema);
export default UserModel;
