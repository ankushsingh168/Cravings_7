import React from "react";

const Login = () => {
  return (
    <>
      <div className="h-[90vh] bg-linear-to-r from-(--secondary) to-(--primary) grid grid-cols-3">
        <div>
          <img src="{deliveryboy}" alt="" className="rotate" />
        </div>
        <div className=""></div>
        
        <form>
          
          <div className="flex flex-col gap-2 mt-4 border-2 bg-amber-50">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" placeholder="enter your email" />
            
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
