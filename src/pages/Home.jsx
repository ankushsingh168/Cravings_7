import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-red-300 h-14 w-full">
        <div className="flex justify-between">
          <div className="mt-2.5">
            <h4>Cravins</h4>
          </div>
          <div className="flex gap-3 mt-2.5 ">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
