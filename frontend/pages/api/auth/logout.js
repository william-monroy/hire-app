import { serialize } from "cookie";

export default async function (req, res) {
  const { cookies } = req;

  const jwt = cookies.DensoJWT;

  if (!jwt) {
    return res.json({
      message: "No se encuentra autenticado",
    });
  } else {
    const serialised = serialize("DensoJWT", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "development",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    });
    res.setHeader("Set-Cookie", serialised);
    res.json({ message: "Successfuly logged out" });
  }
}
