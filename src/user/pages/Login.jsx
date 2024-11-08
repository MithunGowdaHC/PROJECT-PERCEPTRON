// import React, { useState } from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";

// const Login = () => {
//   const [currentState, setCurrentState] = useState("Sign Up");

//   return (
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//       }}
//       className=" flex flex-col items-center w-[90%] sm:max-w-96  m-auto  gap-4 text-gray-800"
//     >
//       <div className=" inline-flex items-center gap-2 mb-2 mt-[50%]">
//         <p className=" prata-regular text-3xl">{currentState}</p>
//         <hr className=" border-none h-[1.5px] w-8 bg-gray-800" />
//       </div>
//       {currentState === "Sign Up" ? (
//         <input
//           type="text"
//           className=" w-full px-3 py-2 border border-gray-800 "
//           placeholder="Name"
//           required
//         />
//       ) : (
//         ""
//       )}
//       <input
//         type="email"
//         className=" w-full px-3 py-2 border border-gray-800 "
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         className=" w-full px-3 py-2 border border-gray-800 "
//         placeholder="Password"
//         required
//       />

//       <div className=" w-full flex justify-between text-sm mt-[-8px]">
//       {currentState === "Log In" ? (
//         <p>Forgot Password</p>
//       ) : (
//         ""
//       )}
//         {currentState === "Sign Up" ? (
//           <p
//             className=" cursor-pointer"
//             onClick={() => setCurrentState("Log In")}
//           >
//             Already a user? Log In
//           </p>
//         ) : (
//           <p
//             className=" cursor-pointer"
//             onClick={() => setCurrentState("Sign Up")}
//           >
//            New User ? Create acount
//           </p>
//         )}
//       </div>

//       <button className=" bg-black text-white font-light px-8 py-2 mt-4">
//         {currentState === " Log In" ? "Sign In" : " Sign Up"}
//       </button>
//       <GoogleLogin
//   onSuccess={(credentialResponse) => {

//       const  credentialResponseDecoded = jwtDecode(credentialResponse.credential)
//       console.log(credentialResponseDecoded)

//   }}
//   onError={() => {
//     console.log('Login Failed');
//   }}/>
//     </form>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-50 via-indigo-50 to-violet-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-indigo-200/30 rounded-full -top-12 -right-12 animate-blob" />
        <div className="absolute w-72 h-72 bg-purple-200/30 rounded-full top-48 -left-12 animate-blob animation-delay-2000" />
        <div className="absolute w-72 h-72 bg-pink-200/30 rounded-full -bottom-12 right-48 animate-blob animation-delay-4000" />
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className="animate-float bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-[90%] sm:max-w-96 flex flex-col gap-6 hover:shadow-indigo-200/50 transition-all duration-500  mt-24"
      >
        <div className="flex items-center justify-center gap-3 mb-4 animate-slide-down">
          <h1 className="text-2xl text-gray-800 font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
            {currentState}
          </h1>
          <div className="h-1 w-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-shimmer" />
        </div>

        {currentState === "Sign Up" && (
          <div className="animate-slide-up">
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-300 outline-none hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100/50"
              placeholder="Name"
              required
            />
          </div>
        )}

        <div className="animate-slide-up" style={{ animationDelay: "100ms" }}>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-300 outline-none hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100/50"
            placeholder="Email"
            required
          />
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-300 outline-none hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100/50"
            placeholder="Password"
            required
          />
          <span
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div
          className="flex justify-between text-sm text-gray-600 animate-fade-in"
          style={{ animationDelay: "300ms" }}
        >
          {currentState === "Log In" && (
            <span className="hover:text-indigo-600 cursor-pointer transition-colors duration-300 hover:scale-105 transform">
              Forgot Password?
            </span>
          )}
          <span
            className="hover:text-indigo-600 cursor-pointer transition-colors duration-300 ml-auto hover:scale-105 transform"
            onClick={() =>
              setCurrentState(currentState === "Sign Up" ? "Log In" : "Sign Up")
            }
          >
            {currentState === "Sign Up"
              ? "Already a user? Log In"
              : "New User? Create account"}
          </span>
        </div>

        <button
          type="submit"
          className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium px-8 py-3 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-indigo-200/50 animate-slide-up overflow-hidden group"
          style={{ animationDelay: "400ms" }}
        >
          <span className="relative z-10">
            {currentState === "Log In" ? "Sign In" : "Sign Up"}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        <div
          className="mt-4 animate-fade-in"
          style={{ animationDelay: "500ms" }}
        >
          <div className="relative flex items-center justify-center">
            <div className="border-t border-gray-300 w-full" />
            <span className="bg-white px-4 text-sm text-gray-500 absolute">
              or
            </span>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-2 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50/50 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              onClick={() => console.log("Google sign in clicked")}
            >
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      </form>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-down {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.5s ease forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent
          );
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Login;
