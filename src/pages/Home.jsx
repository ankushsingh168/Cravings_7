import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-red-300 h-14 p-2 ">
        <div className="flex justify-between h-full items-center ">
          <div>
            <h4>Cravins</h4>
          </div>
          <div className="flex gap-3  ">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
