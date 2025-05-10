import React from "react";
import { Members, Alumni, CrypticText, Card3D } from "./PeopleBase";

// Original membersData from old code
const membersData = {
  12: [
    { name: "Naija Sukhija", role: "Member", image: "Naija Sukhija 11F.jpg" },
    { name: "Suhani Mishra", role: "Member", image: "Suhani Mishra 11F.png" },
    { name: "Agrani Sah", role: "Core Member", image: "Agrani Sah 11G.jpeg" },
    { name: "Goutam Behera", role: "Core Member", image: "Gouttam 11G.jpeg" },
    { name: "Numair Khan" , role: "Member" , image: "Numair.jpeg"},
    { name: "Aryaman Singh Samyal", role: "Member", image: "Aryaman Singh Samyal 11M .png" },
    { name: "Aryaman Aggarwal", role: "Member", image: "aryaman aggarwal 11 I.jpeg" },
    { name: "Sabeer Ranjan", role: "Member", image: "SABEER RANJAN.jpg" },
    { name: "Atharwa Navyam", role: "Member", image: "Atharwa Navyam 11I.png" },
    { name: "Rayhaan Rajkumar", role: "Member", image: "rayhaan.jpg" },
    { name: "Heisnam Satyananda Singh", role: "Member", image: "Satya.jpg" },
    { name: "Swapnil Suraj", role: "Member", image: "swapnil.jpg" },
    { name: "Prakhar Shandilya", role: "Member", image: "Prakhar.jpg" },
    { name: "Arahant Singh", role: "Member", image: "arahant.jpg" },
    { name: "Arjun Atroley" , role: "Member" , image: " Arjun12E.jpeg"},
    
  ],
  11: [
    { name: "Vidhan Garg", role: "Core Member", image: "Vidhan Garg 10C.png" },
    { name : "Vitabhay Garg" , role: "Core Member" , image: "Vitabhay Garg.jpg"},
  ],
  10: [{ name: "Devansh Kumar", role: "Member", image: "Devansh Kumar 9H.jpg" }],
  9: [{ name: "Aaaratrika Singh", role: "Member", image: "" }],
  8: [{ name: "Samanyu Aggarwal", role: "Member", image: "Samanyu Aggarwal 7D.png" }],
  7: [
    { name: "Anureet Kaur Sandhu", role: "Member", image: "Anureet Kaur Sandhu 6-K.jpg" },
    { name: "Jiya Sahni", role: "Member", image: "Jiya Sahani 6k.png" },
    { name: "Ranveer Kalra", role: "Member", image: "Ranveer Kalra 6d.png" }
  ]
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
  ]
};

// Members app - exactly like the original CyberXApp
const CyberXApp = () => {
  const orderedSections = ["12", "11", "10", "9", "8", "7"];
  
  return <Members peopleData={membersData} orderedSections={orderedSections} />;
};

// Alumni app showing graduation years instead of classes
const AlumniApp = () => {
  const orderedSections = ["2025"];
  
  return <Alumni peopleData={alumniData} orderedSections={orderedSections} />;
};

// You can even conditionally render either the Members or Alumni component
const CombinedApp = ({ showAlumni }) => {
  return showAlumni 
    ? <Alumni 
        peopleData={alumniData} 
        orderedSections={["2025"]} 
      />
    : <Members 
        peopleData={membersData} 
        orderedSections={["12", "11", "10", "9", "8", "7"]} 
      />;
};

export { AlumniApp, CombinedApp, Card3D, CrypticText };
export default CyberXApp;
