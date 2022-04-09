import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <h3>Plese Register now</h3>
      <form>
        <input type="email" name="" id="" placeholder="Youe Emali" />
        <br />
        <input style={{margin: "10px"}} type="email" name="" id="" placeholder="Youe Name" />
        <br />
        <input type="password" name="" id="" placeholder="Your Password" />
        <br />
        <input style={{margin: "10px"}} type="submit" value="Register"/>
      </form>
    </div>
  );
};

export default Register;
