import { Button } from "@nextui-org/react";
import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../stores/authContext";

const Navbar = () => {
  const {user, login, logout} = useContext(AuthContext);

  return (
    <div>
      Navbar
      {user ? <Button onClick={logout} color='secondary'>Logout</Button> : null}
    </div>
  );
};

export default Navbar;
