import { useContext } from "react";
import { NextResponse } from "next/server";
// import AuthContext from "../context/authContext";

export default function middleware(req) {
  const url = req.url;
  // const { user } = useContext(AuthContext);
  const user = null;

  if (url.includes("/home")) {
    if (user == null) {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }
}
