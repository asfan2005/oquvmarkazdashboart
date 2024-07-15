import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeSlash } from "react-bootstrap-icons";

function RoyxatdanOtish() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <div
      style={{ border: "2px solid #B3B6B7", borderRadius: "5px" }}
      className="w-100 p-3"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="familya"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Familya
            </label>
            <input
              {...register("familya", {
                required: "Familya is required",
              })}
              type="text"
              id="familya"
              className={`bg-gray-50 border ${
                errors.familya ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="To'raqulov"
              required
            />
            {errors.familya && (
              <p className="text-red-500 text-xs mt-1">
                {errors.familya.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="ism"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ism
            </label>
            <input
              {...register("ism", { required: "Ism is required" })}
              type="text"
              id="ism"
              className={`bg-gray-50 border ${
                errors.ism ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="Asfandiyor"
              required
            />
            {errors.ism && (
              <p className="text-red-500 text-xs mt-1">{errors.ism.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="otasingIsmi"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Otasing Ismi
            </label>
            <input
              {...register("otasingIsmi", {
                required: "Otasing Ismi is required",
              })}
              type="text"
              id="otasingIsmi"
              className={`bg-gray-50 border ${
                errors.otasingIsmi ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="FatherName"
              required
            />
            {errors.otasingIsmi && (
              <p className="text-red-500 text-xs mt-1">
                {errors.otasingIsmi.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="studentPhone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              {...register("studentPhone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[+]998[(][0-9]{2}[)]\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
                  message: "Please enter a valid phone number",
                },
              })}
              type="tel"
              id="studentPhone"
              className={`bg-gray-50 border ${
                errors.studentPhone ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="+998(XX) XXX-XX-XX"
              required
            />
            {errors.studentPhone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.studentPhone.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="fatherPhone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone Number (Otasi)
            </label>
            <input
              {...register("fatherPhone", {
                required: "Father's phone number is required",
                pattern: {
                  value: /^[+]998[(][0-9]{2}[)]\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
                  message: "Please enter a valid phone number",
                },
              })}
              type="tel"
              id="fatherPhone"
              className={`bg-gray-50 border ${
                errors.fatherPhone ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="+998(XX) XXX-XX-XX"
              required
            />
            {errors.fatherPhone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.fatherPhone.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="telegramUser"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Telegram Username
            </label>
            <input
              {...register("telegramUser", {
                required: "Telegram username is required",
              })}
              type="text"
              id="telegramUser"
              className={`bg-gray-50 border ${
                errors.telegramUser ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="https://t.me/username"
              required
            />
            {errors.telegramUser && (
              <p className="text-red-500 text-xs mt-1">
                {errors.telegramUser.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="talabaClass"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sinfni kiriting
            </label>
            <input
              {...register("talabaClass", { required: "Class is required" })}
              type="text"
              id="talabaClass"
              className={`bg-gray-50 border ${
                errors.talabaClass ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="7 Sinf"
              required
            />
            {errors.talabaClass && (
              <p className="text-red-500 text-xs mt-1">
                {errors.talabaClass.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Parol Yarating
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Parol kerak" })}
                className={`bg-gray-50 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Parolni kiriting"
                required
              />
              <button
                type="button"
                className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-400 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlash className="fs-2" />
                ) : (
                  <Eye className="fs-2" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="consent"
              type="checkbox"
              {...register("consent", {
                required: "Rozilikni belgilash zarur",
              })}
              className={`w-4 h-4 border ${
                errors.consent ? "border-red-500" : "border-gray-300"
              } rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800`}
            />
          </div>
          <label
            htmlFor="consent"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Men ko'rsatgan ma'lumotlarim to'g'riligiga roziman
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
}

export default RoyxatdanOtish;
