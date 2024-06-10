import { Link } from "react-router-dom";
import SignUpImg from "../../assets/signup-hero.svg";
import Button from "../Button";
import AppleLogo from "../../assets/icons8-apple-logo.svg";
import FacebookLogo from "../../assets/icons8-facebook.svg";
import GoogleLogo from "../../assets/icons8-google.svg";
import Footer from "../footers/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
const SignUp = () => {
  return (
    <div className="font-poppins">
      {/* Back arrow div */}
      <Link to="/">
        <div className=" p-4">
          {/* Back Arrow */}
          <AiOutlineArrowLeft className=" cursor-pointer font-bold text-black text-2xl" />
        </div>
      </Link>

      <div>
        <div className="flex mx-auto ">
          {/* Hero image div */}

          <div className="hidden md:w-[60%] md:flex justify-center items-center p-4 ">
            {/* Sign up image */}
            <img
              src={SignUpImg}
              alt="Sign-up-hero-image"
              className="pl-12 w-[55em]"
            />
          </div>

          {/* Sign up info div */}
          <div
            className=" w-[100%]  md:w-[40%] px-24 py-8 bg-cover bg-center"
            style={{ backgroundImage: { SignUpImg } }}
          >
            {/* Logo */}
            <h1 className=" text-1xl font-bold cursor-pointer sh pb-3">
              <Link to="/">
                <span className="text-secondary">e</span>ventrybe
              </Link>
            </h1>

            <h1 className="capitalize text-black font-bold  text-3xl mb-3">
              sign up
            </h1>
            <p className="text-slate-400 text-[1.0em]">
              Create your accounts in seconds
            </p>
            {/* This div is for the inputs */}
            <div className="flex flex-col justify-between mt-10">
              <input
                type="email"
                placeholder="email address"
                className="h-16 mb-10 rounded-xl p-4 border-[0.2em] text-slate-400 text-[0.9em] border-black shadow-md"
                required
              />
              <input
                type="text"
                placeholder="password"
                className="h-16 mb-10 rounded-xl p-4 border-[0.2em] border-black shadow-md text-slate-400 text-[0.9em]"
                required
              />

              <Button
                text="Create Account"
                bgColor="red"
                textColor="white"
                btnWidth={530}
                btnHeight={60}
              />
            </div>

            <p className="my-8 text-slate-400 ">or with</p>

            {/* Social media icons */}
            <div className=" flex justify-between">
              {/* Goggle logo */}
              <div className="p-2 border border-slate-500 bg-slate-200 rounded-md w-20 h-14 flex justify-center items-center cursor-pointer">
                <img src={GoogleLogo} alt="goggle-logo" className="h-8 w-8" />
              </div>
              {/* Facebook logo */}
              <div className=" p-4 border border-slate-500 bg-slate-200 w-20 h-14 flex justify-center items-center rounded-md cursor-pointer">
                <img
                  src={FacebookLogo}
                  alt="facebook-logo"
                  className="h-8 w-8"
                />
              </div>
              {/* Apple icon */}
              <div className=" p-4 border border-slate-500 bg-slate-200 w-20 h-14 flex justify-center items-center rounded-md cursor-pointer">
                <img src={AppleLogo} alt="apple-logo" className="h-8 w-8" />
              </div>
            </div>

            <p className=" mt-8 text-slate-400">
              Already have an account?
              <Link to="/SignIn">
                <span className="text-secondary font-bold">Log in</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
