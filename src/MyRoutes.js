import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Quiz from "./Quiz";
import Navbar from "./Navbar";
import React from "react";
import CyberXApp from "./components/Members";
import { Box, Container, Switch, Typography } from "@mui/material";
import Footer from "./Footer";
import About from "./components/About";
import Resources from "./components/Resources";
import MagzineEntry from "./components/MagzineEntry";
import  InterviewEntry from "./InterviewEntry";
import Magazine from "./components/Magzine";

const MyRoutes = () => {
  const navConfig = {
    title: "CyberX",
    menuItems: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Members", href: "/members" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", onClick: () => console.log("Contact clicked") },
    ],
  };

  const email = "cybersecurity@dpsrkp.net";
  const socialMedia = [
    { platform: "Facebook", url: "https://www.facebook.com/CyberX" },
    { platform: "Twitter", url: "https://twitter.com/CyberX" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/company/cyberx" },
    { platform: "GitHub", url: "https://github.com/CyberX-club/" },
    { platform: "Instagram", url: "https://www.instagram.com/CyberX.CLUB" },
  ];

  const resources = [
    {
      label: "Shielding Cyber Attacks",
      img: "protection_against.png",
      description:
        "Guarding the Future: Your First Line of Defense Against Cyber Attacks",
      author: "Goutam Behera",
      postedAt: "2024-07-24",
      urls: [
        "https://drive.google.com/file/d/1zVQ4w58pCVHm200fSv9PkDMwW8ET3deU/view?usp=drive_link",
      ],
    },

    {
      label: "Cyber Security Awareness Guide",
      description:
        "A comprehensive guide on the best practices for staying safe online, covering topics such as password management, phishing, and social engineering.",
      img: "ser-bg2.jpg",
      author: "Atharva Singh",
      postedAt: "2024-10-15",
      urls: [
        "https://drive.google.com/file/d/1CBtkmEu_aHNBnOQJqCHB02_py61Ed1PD/view?usp=sharing",
      ],
    },
    {
      label: "Intro To Trending Cyber Crime Attacks Over Network",
      description:
        "Your Guide to the Top Web Application Security Risks and How to Defend Against Them: A Comprehensive Resource on the Latest Network Security Threats",
      img: "ser-bg.jpg",
      author: "Goutam Behera",
      postedAt: "2024-07-24",
      urls: [
        "https://drive.google.com/file/d/19lYngEhdcWWgF4PEE_4W4-nzzBxnpg4Z/view?usp=sharing",
      ],
    },
    {
      label: "Introduction to Network Security",
      description:
        "This PDF resource covers the fundamentals of network security, including firewalls, intrusion detection systems, and secure protocols.",
      author: "Atharva Singh",
      img: "ser-bg.jpeg",
      urls: [
        "https://drive.google.com/file/d/1hGLfmLrqDPV1cxBc6HdeLU4cLPxGPMZ2/view?usp=sharing",
      ],
    },
    {
      label: "DPSRKP Cyber Security Brochure",
      description:
        "Stay up-to-date with the latest news and trends in the world of cyber security, including recent cyber attacks, vulnerabilities, and patches.",
      img: "dpsrkpcyberx.png",
      urls: [
        "https://drive.google.com/file/d/1fUkmDSicRRzUAl6R1rBlZXWZ1-MmsPhS/view?usp=sharing",
      ],
    },
  ];

  const interviewData = {
    title: "Principal's Interview",
    subtitle: "Insights on Digital Ethics & Cyber Safety",
    imageSrc: "https://i.imgur.com/xZ2fhmf.jpeg",
    questions: [
      "The concept of 'Dharma' in Hindu philosophy encourages fulfilling one’s duty with integrity and ethical conduct. In a world where online privacy and security are frequently compromised, what ethical values would you like to instil in our school community to navigate the digital space responsibly?",
      "With social media having become such a big part of students’ lives, what advice would you give about staying secure and protecting privacy online?",
      "In your opinion, what are the biggest challenges schools face when it comes to integrating technology effectively?",
      "Have you ever had a personal experience with the digital world—whether it was dealing with a security issue, protecting your own digital information, or learning something new about online safety? We'd love to hear about any moments that highlighted the importance of cyber safety for you."
    ],
    answers: [
      "Was Arjun a good or bad person? Was he right? Dharma is defined differently depending on one's viewpoint, the situation, and the moment. However, the core principles of Dharma educate us to act with integrity and truthfulness,They also inspire us to practise honesty and empathy. ",
      `I would say to make the most of it. By this, I intend to use it as "judiciously" as possible. Like beverages, it has the inherited ability to release dopamine. One must avoid becoming dependent on it. Never disclose passwords, keep your privacy settings strict, and refrain from disclosing personal details. Keep in mind that everything you do online creates a digital footprint, so choose wisely! Keep in mind that you made it. Instead of becoming its slave, be its ruler.`,
      `Inexperience. The overuse of technology is what is dangerous, not the technology itself.The most difficult task is striking a balance between the access to technology access and its thoughtful use. Although technology can improve learning, it's crucial to ensure that children are aware of the risks and utilise it sensibly. One of the most crucial issues to overcome is immaturity with regard to its use. The next step on the list is to accept your shortcomings.`,
      `Yes, I have experienced a similar situation, which made me see how easily private data may be compromised. I informed the police about the situation. `
    ]
  };

  const vpcInterviewData = {
    title: "Vice Principal's Message",
    subtitle: "Insights on Cyber Security & Cultural Values",
    imageSrc: "https://media.licdn.com/dms/image/v2/C5103AQF44DeQzWF_Ng/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1578062276333?e=2147483647&v=beta&t=1TcyUhUYiYZYmPnb_sdqBRLBkOpY0LkviSSKRtCXGmY",
    questions: [
      "The Indian culture has always had deep roots with concepts such as 'prevention is better than cure'. Do you believe that it is essential to inculcate such ideas connected to our heritage and history, in today's cyber scenario? And how can we do so?",
      
      "With hacking for unethical purposes and with cyberbullying on the rise, what steps do you think we, as school students can take to create a safer online environment for students?",
      
      "How would you like to see cybersecurity education evolve in schools to better equip students for a digital world?",
      
      "If you had access to technology for the first time as a child today, how do you think you would feel about the need for digital safety measures in your everyday online activities?",
      
      "What's one lesson you've learned about online safety, perhaps from an unexpected situation, that you think would be valuable for students today?"
    ],
    answers: [
      "Yes, absolutely. Even now, many countries such as Germany have preserved our Sanskrit literature and are using it for modern research purposes. Whatever we are doing is in reference to our history. Communication earlier done using letters and travelled by pigeons and horses is now via internet. The old ancient things still prevail in the present time just in a different form.",
      
      "As students, we can create a safer online space by standing up against cyberbullying, supporting each other, and being careful about what we post and share. Number of things inspite we feel we know are not known to us leading to frauds. Even the smallest details matter online. It's important for one to be aware of what's happening around and what kind of traps can they get trapped in.",
      
      "Cybersecurity education should grow alongside technology. Frequent workshops, seminars, programs should be organised so that one or the other opportunity is taken by the student as you may miss it 1 or 2 times but can't miss it if they happen frequently. It's about teaching students not just to use tech but to be responsible digital citizens.",
      
      "If I were growing up with today's technology, I'd be excited but also aware of the need for safety online. Just like locking doors at home, we need to lock down our digital lives with strong passwords and privacy settings. It's about being aware that the digital world can be amazing but also risky, so we must protect ourselves. I will be needing guidance by teachers, parents to the best use of it.",
      
      "One key lesson I've learned about online safety, which I think is crucial for students, is the importance of sharing only what's necessary. In the past, I've seen situations where people overshare, whether it's personal details on social media or even in private chats. What seems like a small, harmless thing can quickly turn into a bigger issue if it's in the wrong hands. The lesson here is: dig into and share only what's required. Whether it's personal information, passwords, or even just a photo. It's about being mindful."
    ]
  };
  
  

  return (
    <BrowserRouter>
      <Navbar config={navConfig} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={"/quiz"} element={<Quiz />} />
        <Route path={"/members"} element={<CyberXApp />} />
        <Route path={"/about"} element={<About />} />
        <Route
          path={"/resources"}
          element={<Resources resources={resources} />}
        />
        <Route path="/magazine-2024/:slug" element={<Magazine />} />
        <Route path="/principals-message" element={<InterviewEntry {...interviewData}/>} />
        <Route path="/vprincipals-message" element={<InterviewEntry {...vpcInterviewData}/>} />
      </Routes>

      <Footer email={email} socialMedia={socialMedia} />
    </BrowserRouter>
  );
};

export default MyRoutes;
