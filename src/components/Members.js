import React from "react";
import { Members, Alumni, CrypticText, Card3D } from "./PeopleBase";

// Original membersData from old code
const membersData = {
  12: [
    { name: "Naija Sukhija", role: "Member", image: "Naija Sukhija 11F.jpg" },
    { name: "Suhani Mishra", role: "Member", image: "Suhani Mishra 11F.png" },
    { name: "Agrani Sah", role: "Core Member", image: "Agrani Sah 11G.jpeg" },
    { name: "Goutam Behera", role: "Core Member", image: "Gouttam 11G.jpeg" },
    {name: "Numair Khan" , role: "Member" , image: "Numair.jpeg"},
    { name: "Aryaman Singh Samyal", role: "Member", image: "Aryaman Singh Samyal 11M .png" },
    { name: "Aryaman Aggarwal", role: "Member", image: "aryaman aggarwal 11 I.jpeg" },
    { name: "Sabeer Ranjan", role: "Member", image: "SABEER RANJAN.jpg" },
    { name: "Atharwa Navyam", role: "Member", image: "Atharwa Navyam 11I.png" },
    { name: "Rayhaan Rajkumar", role: "Member", image: "rayhaan.jpg" },
    { name: "Heisnam Satyananda Singh", role: "Member", image: "Satya.jpg" },
    { name: "Swapnil Suraj", role: "Member", image: "swapnil.jpg" },
    { name: "Prakhar Shandilya", role: "Member", image: "Prakhar.jpg" },
    { name: "Arahant Singh", role: "Member", image: "arahant.jpg" },
  ],
  11: [
    { name: "Vidhan Garg", role: "Core Member", image: "Vidhan Garg 10C.png" },
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
  2024: [
    { name: "Arnav Sharma", role: "Former President", image: "arnav.jpg" },
    { name: "Priya Gupta", role: "Former Core Member", image: "priya.jpg" },
    { name: "Rahul Khanna", role: "Former Member", image: "rahul.jpg" }
  ],
  2023: [
    { name: "Aditya Patel", role: "Former Core Member", image: "aditya.jpg" },
    { name: "Neha Singh", role: "Former Member", image: "neha.jpg" }
  ],
  2022: [
    { name: "Vikram Malhotra", role: "Former President", image: "vikram.jpg" }
  ]
};

// Members app - exactly like the original CyberXApp
const CyberXApp = () => {
  const orderedSections = ["12", "11", "10", "9", "8", "7"];
  
  return <Members peopleData={membersData} orderedSections={orderedSections} />;
};

// Alumni app showing graduation years instead of classes
const AlumniApp = () => {
  const orderedSections = ["2024", "2023", "2022"];
  
  return <Alumni peopleData={alumniData} orderedSections={orderedSections} />;
};

// You can even conditionally render either the Members or Alumni component
const CombinedApp = ({ showAlumni }) => {
  return showAlumni 
    ? <Alumni 
        peopleData={alumniData} 
        orderedSections={["2024", "2023", "2022"]} 
      />
    : <Members 
        peopleData={membersData} 
        orderedSections={["12", "11", "10", "9", "8", "7"]} 
      />;
};

export { AlumniApp, CombinedApp, Card3D, CrypticText };
export default CyberXApp;
