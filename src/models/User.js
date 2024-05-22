import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    lastName: String,
    userName: String,
    email: String,
    password: String,
    confirmPassword: String,
    dateOfBirth: String,
    gender: String,
    maritalStatus: String,
    phoneNumber: Number,
    academicEducation: String,
    profession: String,
    companie: String,
    salary: Number,
    trafficLicense: Boolean,
    address: [
      {
        street: { type: String, required: true },
        apartmentNumber: { type: Number, required: true },
        neighborhood: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: Number, required: true },
        country: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
