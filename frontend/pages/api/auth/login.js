import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import { verify } from "jsonwebtoken";

const secret = process.env.SECRET;

export default async function (req, res) {
  const { username, password } = req.body;

  // Check in database
  // If a user with this username
  // and password exists
  if (username === "admin" && password === "admin") {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 24 horas
        //payload:
        //--------testing----------
        _id: 1,
        fname: "William",
        lname: "Monroy",
        email: "example@gmail.com",
        cellphone: "1234567890",
        birthday: "05/09/2000",
        avatar: "https://avatars.githubusercontent.com/u/58092741?v=4",
        admin: true,
        //-------------------------
        // _id: user.id,
        // username: user.username,
        // type: user.type,
      },
      secret
    );

    const serialised = serialize("DensoJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    res.setHeader("Set-Cookie", serialised);
    const user = verify(token, secret);
    res.status(200).json({ message: "Seccess!", data: user });
    // res.status(200).json({ message: "Seccess!" });
  } else if (username === "user" && password === "user") {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 24 horas
        //payload:
        //--------testing----------
        _id: 2,
        fname: "Andrés",
        lname: "Fuentes",
        email: "example@gmail.com",
        cellphone: "1234567890",
        birthday: "23/04/1997",
        avatar: "https://avatars.githubusercontent.com/u/68234319?v=4",
        admin: false,
        //-------------------------
        // _id: user.id,
        // username: user.username,
        // type: user.type,
      },
      secret
    );

    const serialised = serialize("DensoJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    res.setHeader("Set-Cookie", serialised);
    const user = verify(token, secret);
    res.status(200).json({ message: "Seccess!", data: user });
    // res.status(200).json({ message: "Seccess!" });
  } else {
    res.status(204).json({ message: "Invalid credentials" });
  }
}
