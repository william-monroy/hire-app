import axios from "axios";
import positions from "../data/Positions";

export const getCandidates = async () => {
  try {
    const users = [];

    const getAge = (birthDate) =>
      Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
    const status = ["pendiente", "admitido", "rechazado"];
  
    const res = await axios.get("/api/get/applicants");
    console.log(res.data);
    const cand = res.data.data.data;
    console.log("cand", cand);
    for (let i = 0; i < cand.length; i++) {
      let idPos = Math.floor(Math.random() * positions.length);
      let rating = Math.floor(Math.random() * 6);
      users.push({
        id: cand[i].id,
        name: cand[i].fname + " " + cand[i].lname,
        role: positions[idPos].name,
        team: positions[idPos].category,
        status:
          rating == 0 ? status[0] : status[Math.floor(Math.random() * 2) + 1],
        age: getAge(cand[i].age),
        avatar: `https://i.pravatar.cc/150?u=${cand[i].email}`,
        email: cand[i].email,
        rating: rating,
        phone: cand[i].phoneNumber,
      });
    }
    return users; 
  } catch (error) {
    console.log(error);
    return [];
  }
};
