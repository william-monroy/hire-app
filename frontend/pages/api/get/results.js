import axios from "axios";

export default async function (req, res) {
  const { id } = req.body;

  var results;

  const getApplicants = await axios
    .post("http://localhost:5000/api/get/results", { id: id })
    .then(function (data) {
      results = data.data;
      console.log("Peticion Next.js api/get/results", results);
      res.status(200).json({ message: "Seccess!", data: results });
    })
    .catch(function (error) {
      console.log(error);
      res.status(204).end();
    });
}
