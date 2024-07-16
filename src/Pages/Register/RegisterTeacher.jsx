import { Helmet } from "react-helmet";
import Container from "../../Components/Container/Container";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  Input,
  Option,
  Typography,
} from "@material-tailwind/react";

import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import useAxiosPublic from "../../hooks/useAxiosPublic";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const RegisterTeacher = () => {
  // const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // const axiosPublic = useAxiosPublic();

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  // const onSubmit = async (data) => {
  //   // const imageFile = { image: data.photo[0] };
  //   // const imgRes = await axiosPublic.post(image_hosting_api, imageFile, {
  //   // headers: {
  //   //   "content-type": "multipart/form-data",
  //   // },
  //   // });
  //   // if (imgRes.data.success) {
  //   //   const name = data.name;
  //   //   const email = data.email;
  //   //   const password = data.password;
  //   //   const photo = imgRes.data.data.display_url;
  //   //   console.log(name, email, password, photo);
  //   //   createUser(email, password)
  //   //     .then((res) => {
  //   //       // const user = res.user;
  //   //       // console.log(user);
  //   //       updateProfile(auth.currentUser, {
  //   //         displayName: name,
  //   //         photoURL: photo,
  //   //       })
  //   //         .then(() => {
  //   //           const userInfo = {
  //   //             name: data.name,
  //   //             email: data.email,
  //   //             image: data.photo,
  //   //           };
  //   //           axiosPublic.post("/user", userInfo).then((res) => {
  //   //             if (res.data.insertedId) {
  //   //               Swal.fire({
  //   //                 position: "center",
  //   //                 icon: "success",
  //   //                 title: "Sign Up complete",
  //   //                 showConfirmButton: false,
  //   //                 timer: 1500,
  //   //               });
  //   //               navigate(location?.state ? location?.state : "/");
  //   //             }
  //   //           });
  //   //           // User information updated successfully
  //   //           // console.log("User created with name and photo:",);
  //   //         })
  //   //         .catch((error) => {
  //   //           console.error("Error updating user information:", error.message);
  //   //         });
  //   //     })
  //   //     .catch((error) => {
  //   //       console.log(error.message);
  //   //     });
  //   // }
  // };
  return (
    <div className="my-20">
      <Helmet>
        <title>EduLink | Register</title>
      </Helmet>

      <Container>
        <div className="flex justify-center gap-8">
          {/* Card Container */}
          <Card
            color="transparent"
            shadow={false}
            className="border p-10 shadow-xl border-blue-gray-200 bg-[#F4FDFF] w-full max-w-3xl"
          >
            {/* Title */}
            <Typography
              variant="h4"
              className="text-center text-2xl font-black"
              color="blue-gray"
            >
              Register as a Teacher
            </Typography>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 mb-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {/* Full Name Input */}
              <div className="col-span-full">
                <Typography variant="h6" color="blue-gray">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Please Enter Your Full Name"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-600">Name is required</p>
                )}
              </div>

              {/* Teacher ID Input */}
              <div className="col-span-full sm:col-span-1 lg:col-span-1">
                <Typography variant="h6" color="blue-gray">
                  Teacher ID
                </Typography>
                <Input
                  size="lg"
                  type="number"
                  name="roll"
                  {...register("roll", { required: true })}
                  placeholder="Please Enter Teacher ID"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                />
                {errors.roll?.type === "required" && (
                  <p className="text-red-600">Teacher ID is required</p>
                )}
              </div>

              {/* Department Select */}
              <div className="col-span-full sm:col-span-1 lg:col-span-1">
                <Typography variant="h6" color="blue-gray">
                  Choose Your Department
                </Typography>
                <select
                  name="department"
                  {...register("department", { required: true })}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full py-2 px-3 rounded-md"
                >
                  <option value="">Please Select Your Department</option>
                  <option value="CST">CST</option>
                  <option value="Civil">Civil</option>
                  <option value="Power">Power</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Non-tech">Non-tech</option>
                </select>
                {errors.department?.type === "required" && (
                  <p className="text-red-600">Department is required</p>
                )}
              </div>

              {/* Phone Number Input */}
              <div className="col-span-full">
                <Typography variant="h6" color="blue-gray">
                  Your Phone Number
                </Typography>
                <Input
                  type="text"
                  name="phone"
                  size="lg"
                  {...register("phone", {
                    required: true,
                    pattern: {
                      value: /^01\d{9}$/,
                      message:
                        "Phone number must start with '01' and be 11 digits long",
                    },
                  })}
                  placeholder="Please Enter your phone number"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                />
                {errors.phone?.type === "required" && (
                  <p className="text-red-600">Phone number is required</p>
                )}
                {errors.phone?.type === "pattern" && (
                  <p className="text-red-600">{errors.phone.message}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="col-span-full">
                <Typography variant="h6" color="blue-gray">
                  Enter Your Email
                </Typography>
                <Input
                  type="email"
                  name="email"
                  size="lg"
                  {...register("email", { required: true })}
                  placeholder="Please Enter your email"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">Email is required</p>
                )}
              </div>

              {/* Password Input */}
              <div className="col-span-full">
                <Typography variant="h6" color="blue-gray">
                  Password
                </Typography>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"} // Toggle input type
                    name="password"
                    size="lg"
                    {...register("password", { required: true })}
                    placeholder="Please set a strong password"
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 pr-10"
                  />
                  <div
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <AiFillEyeInvisible size={20} />
                    ) : (
                      <AiFillEye size={20} />
                    )}
                  </div>
                </div>
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
              </div>

              {/* Photo Upload Input */}
              <div className="col-span-full">
                <Typography variant="h6" color="blue-gray">
                  Upload Your Photo
                </Typography>
                <Input
                  type="file"
                  name="photo"
                  size="lg"
                  placeholder="Upload your photo"
                  {...register("photo")}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                />
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="col-span-full">
                <Checkbox
                  name="terms"
                  {...register("terms", { required: true })}
                  label={
                    <Typography variant="small" color="gray">
                      I agree to the{" "}
                      <a
                        href="#"
                        className="font-medium transition-colors hover:text-gray-900"
                      >
                        Terms and Conditions
                      </a>
                    </Typography>
                  }
                  containerProps={{ className: "mt-2" }}
                />
                {errors.terms?.type === "required" && (
                  <p className="text-red-600">You must agree to the terms</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="col-span-full">
                <Button className="mt-6 bg-black" fullWidth type="submit">
                  Register
                </Button>
              </div>
            </form>

            {/* Additional Links */}
            <Typography color="gray" className="mt-4 text-center font-normal">
              Register as a Student{" "}
              <NavLink
                to="/signup-student"
                className="underline text-red-500 font-bold"
              >
                account
              </NavLink>
              .
            </Typography>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="underline text-red-500 font-bold"
              >
                Login
              </NavLink>
            </Typography>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default RegisterTeacher;