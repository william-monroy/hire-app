import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import { verify } from "jsonwebtoken";
import axios from "axios";

const secret = process.env.SECRET;

export default async function (req, res) {
  const { fName, lName, email, telefono, password, birth } = req.body;

  const month = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  const parseDate = (date) => {
    const DD = date.split(" ")[1];
    const MM = month[date.split(" ")[2]];
    const YY = date.split(" ")[3];
    const dateParsed = DD + "/" + MM + "/" + YY;
    return dateParsed;
  };

  var usuario;

  const setUser = await axios
    .post("http://localhost:5000/api/auth/signup", {
      f_name: fName,
      l_name: lName,
      email: email,
      phone: telefono,
      password: password,
      birthday: birth,
    })
    .then(function (data) {
      usuario = data.data;
      //console.log(usuario);
    })
    .then(function (data) {
      const birth = parseDate(usuario.birthday);

      const token = sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 24 horas
          //payload:
          _id: usuario.id,
          fname: usuario.fname,
          lname: usuario.lname,
          email: usuario.email,
          cellphone: usuario.cellphone,
          birthday: birth,
          avatar: "https://avatars.githubusercontent.com/u/68234319?v=4",
          admin: false,
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
    })
    .catch(function (error) {
      console.log(error);
      res.status(204).end();
    });
}
