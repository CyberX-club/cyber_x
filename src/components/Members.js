import React from "react";
import { Members, Alumni, CrypticText, Card3D } from "./PeopleBase";
import { alumniData } from "./Alumni";
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";

const membersData = {
  12: [
    {
      name: "Vidhan Garg",
      role: "Core Member",
      image: "Vidhan Garg 10C.png",
    },
    {
      name: "Vitabhay Garg",
      role: "Core Member",
      image: "Vitabhay Garg.jpg",
    },
    {
      name: "Farzooque Hasan",
      role: "Core Member",
      image: "FarzooqueHasan.png",
    },
    { name: "Naitik Singhal", role: "Core Member", image: "naitik.png" },
    { name: "Aarya", role: "Ad-Hoc", image: "aarya11.png" },
    { name: "Elina Aggarwal", role: "Ad-Hoc", image: "Elina11.png" },
    { name: "Sanjit Krishna Agarwala", role: "Ad-Hoc", image: "" },
    {
      name: "Siddharth Srivastava",
      role: "Ad-Hoc",
      image: "SiddhartSrivastava.png",
    },
  ],

  11: [
    {
      name: "Devansh Kumar",
      role: "Core Member",
      image: "Devansh Kumar 9H.jpg",
    },
    { name: "Arhaan Sharma", role: "Member", image: "" },
    { name: "Kiara Kapoor", role: "Member", image: "" },
    { name: "Aviral Goyal", role: "Ad-Hoc", image: "" },
    { name: "Esh Sinha", role: "Ad-Hoc", image: "" },
  ],

  10: [
    { name: "Aaratrika Singh", role: "Ad-Hoc", image: "" },
    { name: "Ayan Srivastava", role: "Ad-Hoc", image: "" },
  ],

  9: [
    { name: "Amartya Samajhdar", role: "Ad-Hoc", image: "amartaya.png" },
  ],

  8: [
    { name: "Ranveer Kalra", role: "Member", image: "RanveerKalraUpd.png" },
    { name: "N Akshay Kumar", role: "Ad-Hoc", image: "Akshay7D.png" },
  ],

  7: [
    { name: "Aarav", role: "Ad-Hoc", image: "" },
    { name: "Keshav Karthikeye Valluri", role: "Ad-Hoc", image: "" },
    { name: "Pranika Gupta", role: "Ad-Hoc", image: "" },
  ],

  6: [
    { name: "****", role: "Ad-Hoc", image: "" },
  ]
};



// Members app - exactly like the original CyberXApp
const CyberXApp = () => {
  const orderedSections = ["12", "11", "10", "9", "8", "7", "6"];

  return (
    <Box sx={{ pt: 14, pb: 10 }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }}>
        <Button
          component={Link}
          to="/alumini"
          variant="outlined"
          size="large"
          sx={{
            position: "relative",
            zIndex: 1,
            fontFamily: "Space Mono",
            color: "#fff",
            borderColor: "#00ff9d",
            px: 4,
            py: 1.5,
            borderRadius: 2,
            "&:hover": {
              borderColor: "#00b8ff",
              backgroundColor: "rgba(0, 255, 157, 0.1)",
            },
          }}
        >
          View Alumni
        </Button>
      </Box>
      <Members peopleData={membersData} orderedSections={orderedSections} />
    </Box>
  );
};

// (AlumniApp removed) use src/components/Alumni.js as the canonical AlumniPage

// You can even conditionally render either the Members or Alumni component
const CombinedApp = ({ showAlumni }) => {
  return showAlumni ? (
    <Alumni peopleData={alumniData} orderedSections={["2025-26", "2024-25"]} />
  ) : (
    <Members
      peopleData={membersData}
      orderedSections={["12", "11", "10", "9", "8", "7"]}
    />
  );
};

export { CombinedApp, Card3D, CrypticText };
export default CyberXApp;
