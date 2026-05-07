import React from "react";
import { Alumni as AlumniView } from "./PeopleBase";

const alumniData = {
  "2025-26": [
    { name: "Arahant Singh", role: "President", image: "arahant.jpg" },
    { name: "Atharwa Navyam", role: "President", image: "Atharwa Navyam 12F.jpg" },
    { name: "Aryaman Aggarwal", role: "Vice President", image: "aryaman aggarwal 11 I.jpeg" },
    { name: "Naija Sukhija", role: "Vice President", image: "Naija Sukhija 11F.jpg" },
    { name: "Arjun Atroley", role: "Director", image: "arjunatroley.jpg" },
    { name: "Goutam Behera", role: "Core Member", image: "Gouttam 11G.jpeg" },
    { name: "Numair Khan", role: "Core Member", image: "Numair.jpeg" },
    { name: "Swapnil Suraj", role: "Core Member", image: "swapnil.jpg" },
    { name: "Sabeer Ranjan", role: "Member", image: "SABEER RANJAN.jpg" },
    { name: "Neil Saxena", role: "Ad-Hoc", image: "Neil.png" }
  ],
  "2024-25": [
    { name: "Atharva Singh", role: "Director", image: "ATHARVA SINGH.jpeg" },
    { name: "Gyanshu Raj", role: "Director", image: "Gyanshu Raj 12 E.png" },
    {
      name: "Atharvajeet Singh",
      role: "Chief Advisor",
      image: "ATHARVAJEET.jpeg",
    },
    { name: "Twamadi Sar", role: "Creative Head", image: "Twamadi Sar.jpg" },
    {
      name: "Akshit Shubham",
      role: "Technical Head",
      image: "Akshit Shubham.jpeg",
    },
    {
      name: "Swastika Dubey",
      role: "Event Head",
      image: "Swastika Dubey12 F.jpg",
    },
    { name: "Vrinda Aggarwal", role: "Treasurer", image: "Vrinda.jpg" },
    { name: "Tanush Jayara", role: "Member", image: "Tanush Jayara 12 E.png" },
    {
      name: "Aaahana Mehrotra",
      role: "Member",
      image: "Aaahana Mehrotra.jpg",
    },
    { name: "Vishisht", role: "Member", image: "Vishisht  12L .JPG" },
  ],
};

const AlumniPage = () => {
  return (
    <AlumniView
      peopleData={alumniData}
      orderedSections={["2025-26", "2024-25"]}
    />
  );
};

export { alumniData };
export default AlumniPage;
