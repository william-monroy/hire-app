import axios from "axios";

export default async function (req, res) {
  var applicants;

  const getApplicants = await axios
    .get("http://localhost:5000/api/get/candidates")
    .then(function (data) {
      applicants = data.data;
      console.log('Peticion Next.js api/get/applicants', applicants);
      res.status(200).json({ message: "Seccess!", data: applicants });
    })
    .catch(function (error) {
      console.log(error);
      res.status(204).end();
    });
}
