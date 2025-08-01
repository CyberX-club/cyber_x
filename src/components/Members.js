import React from "react";
import { Members, Alumni, CrypticText, Card3D } from "./PeopleBase";

// Original membersData from old code
const membersData = {
  12: [
    { name: "Arahant Singh", role: "Core Member", image: "arahant.jpg" },
    {
      name: "Atharwa Navyam",
      role: "Core Member",
      image: "Atharwa Navyam 12F.jpg",
    },
    { name: "Arjun Atroley", role: "Core Member", image: "arjunatroley.jpg" },
    {
      name: "Swapnil Suraj",
      role: "Core Member",
      image: "swapnil.jpg",
    },
    { name: "Goutam Behera", role: "Core Member", image: "Gouttam 11G.jpeg" },
    { name: "Numair Khan", role: "Core Member", image: "Numair.jpeg" },
    {
      name: "Aryaman Aggarwal",
      role: "Core Member",
      image: "aryaman aggarwal 11 I.jpeg",
    },
    { name: "Naija Sukhija", role: "Member", image: "Naija Sukhija 11F.jpg" },
    { name: "Sabeer Ranjan", role: "Member", image: "SABEER RANJAN.jpg" },
    {
      name: "Abhigyan Jhunjhunwala",
      role: "Ad-Hoc",
      image: "AbhigyanXIIC.jpg",
    },
    { name: "Shesh Shiromani", role: "Ad-Hoc", image: "Shesh12G.jpg" },
    { name: "Advaith Sai Panda", role: "Ad-Hoc", image: "advaith12H.png" },
  ],
  11: [
    { name: "Vidhan Garg", role: "Core Member", image: "Vidhan Garg 10C.png" },
    { name: "Vitabhay Garg", role: "Core Member", image: "Vitabhay Garg.jpg" },
    { name: "Siddharth Srivastava", role: "Ad-Hoc", image: "" },
    { name: "Farzooque Hasan", role: "Ad-Hoc", image: "" },
    { name: "Aarya", role: "Ad-Hoc", image: "aarya11.png" },
    { name: "Elina Aggarwal", role: "Ad-Hoc", image: "Elina11.png" },
  ],
  10: [
    { name: "Devansh Kumar", role: "Member", image: "Devansh Kumar 9H.jpg" },
    { name: "Aviral Goyal", role: "Ad-Hoc", image: "" },
    { name: "Esh Sinha", role: "Ad-Hoc", image: "" },
    { name: "Kiara Kapoor", role: "Ad-Hoc", image: "" },
  ],
  9: [
    { name: "Aaratrika Singh", role: "Ad-Hoc", image: "" },
    { name: "Ayan Srivastava", role: "Ad-Hoc", image: "" },
  ],

  8: [
    { name: "Amartya Samajhdar", role: "Ad-Hoc", image: " " },
    { name: "Arshia Batheja", role: "Ad-Hoc", image: " " },
  ],

  7: [
    { name: "Ranveer Kalra", role: "Member", image: "Ranveer Kalra 6d.png" },
    { name: "N Akshay Kumar", role: "Ad-Hoc", image: "" },
  ],

  6: [
    { name: "Pranika Gupta", role: "Ad-Hoc", image: "" },
    { name: "Keshav Karthikeye Valluri", role: "Ad-Hoc", image: "" },
  ],
};

// Sample alumni data
const alumniData = {
  2025: [
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
    { name: "Aaahana Mehrotra", role: "Member", image: "Aaahana Mehrotra.jpg" },
    { name: "Vishisht", role: "Member", image: "Vishisht  12L .JPG" },
  ],
};

// Members app - exactly like the original CyberXApp
const CyberXApp = () => {
  const orderedSections = ["12", "11", "10", "9", "8", "7", "6"];

  return <Members peopleData={membersData} orderedSections={orderedSections} />;
};

// Alumni app showing graduation years instead of classes
const AlumniApp = () => {
  const orderedSections = ["2025"];

  return <Alumni peopleData={alumniData} orderedSections={orderedSections} />;
};

// You can even conditionally render either the Members or Alumni component
const CombinedApp = ({ showAlumni }) => {
  return showAlumni ? (
    <Alumni peopleData={alumniData} orderedSections={["2025"]} />
  ) : (
    <Members
      peopleData={membersData}
      orderedSections={["12", "11", "10", "9", "8", "7"]}
    />
  );
};

export { AlumniApp, CombinedApp, Card3D, CrypticText };
export default CyberXApp;
