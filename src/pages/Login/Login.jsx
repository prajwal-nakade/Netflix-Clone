import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { signup, login } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className="w-full min-h-screen flex items-center justify-center ">
          <img src={netflix_spinner} alt="" className="w-[60px]" />
        </div>
      ) : (
        <div className="bg-[linear-gradient(#0000007e,#0000007e),url(./background_banner.jpg)] object-cover h-screen px-20 py-10  ">
          <div className="">
            <img src={logo} alt="" width={140} />
          </div>

          <div className=" px-10 py-12 mx-auto rounded-md w-100 flex flex-col bg-black/70 gap-4">
            <div className="w-full flex items-start justify-start">
              <h1 className="text-4xl mb-6">{signState}</h1>
            </div>
            <form
              action=""
              className="flex flex-col items-start justify-start w-full gap-5 pe-4"
            >
              {signState === "Sign Up" ? (
                <div className="flex flex-col items-start justify-start w-full">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Your Name...."
                    className="px-3 py-3 w-full bg-neutral-700 rounded-md "
                  />
                </div>
              ) : null}

              <div className="flex flex-col items-start justify-start w-full">
                <input
                  type="email"
                  placeholder="Email...."
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="px-3 py-3 w-full bg-neutral-700 rounded-md "
                />
              </div>

              <div className="flex flex-col items-start justify-start w-full">
                <input
                  type="password"
                  placeholder="Password...."
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="px-3 py-3 w-full bg-neutral-700 rounded-md "
                />
              </div>
              <button
                onClick={user_auth}
                type="submit"
                className="w-full bg-red-500 px-4 py-2 rounded-md"
              >
                {signState}
              </button>

              <div className="flex justify-between w-full">
                <div>
                  <input type="checkbox" />
                  <label>remember me</label>
                </div>

                <p className="">Need Help?</p>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                {signState === "Sign Up" ? (
                  <p className="">
                    Already have account?{" "}
                    <span
                      onClick={() => setSignState("Sign In")}
                      className="cursor-pointer"
                    >
                      Sign In Now
                    </span>
                  </p>
                ) : (
                  <p className="">
                    New On Netflix?{" "}
                    <span
                      className="cursor-pointer"
                      onClick={() => setSignState("Sign Up")}
                    >
                      Sign Up Now
                    </span>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
