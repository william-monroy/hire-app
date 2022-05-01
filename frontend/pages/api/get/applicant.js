import axios from "axios";

export default async function (req, res) {
  const { id } = req.body;

  var candidate;

  const getApplicants = await axios
    .post("http://localhost:5000/api/get/candidate", { id: id })
    .then(function (data) {
      candidate = data.data;
      console.log("Peticion Next.js api/get/candidate", candidate);
      res.status(200).json({ message: "Seccess!", data: candidate });
    })
    .catch(function (error) {
      console.log(error);
      res.status(204).end();
    });
}
