import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  Avatar,
  useTheme,
  styled
} from '@mui/material';

// Styled components
const QuestionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const AnswerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  paddingLeft: theme.spacing(6),
  marginBottom: theme.spacing(4),
}));

const QuestionAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.main,
  width: 32,
  height: 32,
}));

const AnswerAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.grey[600],
  width: 32,
  height: 32,
}));


const InterviewEntry = ({ 
  title = "Interview",
  subtitle,
  imageSrc,
  imageAlt = "Interview subject",
  questions = [], 
  answers = [] 
}) => {
  const theme = useTheme();

  return (
    <Card sx={{ 
      maxWidth: '800px', 
      margin: '32px auto',
      borderRadius: 2,
      boxShadow: theme.shadows[3],
    }}>
      <CardContent>

        {imageSrc && (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            mb: 4 
          }}>
            <Avatar
              src={imageSrc}
              alt={imageAlt}
              sx={{
                width: 200,
                height: 200,
                boxShadow: theme.shadows[3],
              }}
            />
          </Box>
        )}


        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h1"
            sx={{ 
              fontFamily: 'Space Mono',
              fontWeight: 'bold',
              color: theme.palette.text.primary,
              mb: 1
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography 
              variant="subtitle1"
              sx={{ 
                fontFamily: 'Space Mono',
                color: theme.palette.text.secondary 
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>

        
        {questions.map((question, index) => (
          <Box key={index}>
            <QuestionBox>
              <QuestionAvatar>Q</QuestionAvatar>
              <Typography 
                sx={{ 
                  fontFamily: 'Space Mono',
                  color: theme.palette.text.primary,
                  fontWeight: 500,
                }}
              >
                {question}
              </Typography>
            </QuestionBox>

            <AnswerBox>
              <AnswerAvatar>A</AnswerAvatar>
              <Typography 
                sx={{ 
                  fontFamily: 'Space Mono',
                  color: theme.palette.text.secondary,
                }}
              >
                {answers[index]}
              </Typography>
            </AnswerBox>

            {index < questions.length - 1 && (
              <Box 
                sx={{ 
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  my: 3,
                  mx: 6 
                }} 
              />
            )}
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default InterviewEntry;




// Bro who keeps using AI ;-;
export const PrincipalInterview_volume2 = {
  title: "Principal's Interview",
  subtitle: "Mr. Anil Kumar",
  imageSrc: "/AnilKumar.png",
  questions: [
    "If cybersecurity and technology were taught like Maths and Science in school, how would students’ relationship with tech change? Would it be beneficial?",
    "You firmly believe in keeping one’s mind peaceful and steady. What does that look like in a digital world of negativity and overstimulation?",
    "Given how much technology has advanced, was there a specific incident or breakthrough that made you realise how crucial Cybersecurity is in education?",
    "Cyberbullying has become increasingly common among students with the rise of social media and smartphone use. How does our school help students suffering from this, and what could be done to make a safe digital space rooted in our values of empathy?",
    "The idea of 'Dharma' aligns closely with our school's motto, 'Service Before Self.' How do you plan to integrate technology into the school while addressing the potential risks and challenges it brings?"
  ],
  answers: [
    "It holds a very high value. There can be security issues at three levels. Physical, mental, and spiritual, where our spirit is the most difficult to hurt. At our intellectual level, mentally hurting someone takes a long time to heal. When it reaches your heart, it hurts the most and takes the longest to heal. Cybersecurity is about attacks that happen to one’s mind. It has to be dealt with by carefully analysing the situation. ",
    "A striking balance should exist along with an equilibrium. If your head, hand and heart are not synchronised, it can cause a stimulus to work for an hour, which is mentally exhausting and can harm the body. Things work as a stimulus. Overstimulation can be reduced with the help of yoga. It can help calm the mind. The Younger generation may find it hard, but physical exercise is required and sweating out once or twice a day should be typical.",
    " I am a fan of technology, and I am cautious. It depends on how one differentiates between what is good technology and what is not good technology. It is best to show adversity in good technology.  Getting too into it can lead to bad outcomes in the sense of being for the better or for the worse. Thus, it should be taught in school, but at a limited rate, and one must also train one's mind to absorb its positive aspects.",
    "The keyword is “bullying.” Regardless of the situation, anyone with this mindset can do it to others. Technology accelerates this behaviour. It aligns with the concept of bullying. Cyberbullying provides insight into its triggers. Thoughts lead to words, which lead to actions, and repeated actions form habits. Further, overstimulation can lead to toxicity. We must help children’s mental spaces, as they can be harmed. Instant gratification is given. I don’t use social media, but I do use the basic modes of communication.",
    "Aligning technology with the motto ‘service before self’. Two intelligent minds put together definitely make a better one. Closely knit processes, provided that they work according to our goals, and if technology binds them, they can work. People with disabilities depend greatly on technology as it mobilises and provides a structure. Which helps bring out their potential and incorporates it for the betterment of the country. And if it happens in such a manner, I feel that it will be a beautiful result; it will help people aim for the best in themselves and work towards a brighter future."
  ]
};

export const VPInterview_NM_volume2 = {
  title: "Vice Principal's Interview",
  subtitle: "Mr. Naresh Kumar Miglani",
  imageSrc: "/NareshKumarMiglani.png",
  questions: [
    "How do you see AI and emerging technologies transforming how we teach and learn in the classroom?",
    "How is our curriculum evolving to keep up with digital literacy and 21st-century skills?",
    "Do you feel students rely too heavily on technology for answers? How do you promote independent thinking?",
    "Have you faced resistance from faculty when implementing new tech? How did you navigate that?",
    "What’s your vision for hybrid learning? Is it a temporary solution or a long-term feature?"
  ],
  answers: [
    "AI has already begun personalising education. The future we hope for, where every student can get personalised education according to their needs, is not far. However, this future must be guided by ethical oversight and strong pedagogical intent to prevent the misuse of these technologies.",
    "We’ve started integrating digital competencies in middle and senior grades—coding, digital collaboration tools, and basic cybersecurity awareness. However, there is still much more that needs to be done to shape our students for the future that is taking shape.",
    "Yes, there used to be a tendency to 'Google' everything, even though this tendency has switched gears and focused more on different AI chatbots. We promote inquiry-based learning and emphasise source evaluation. Reflection journals and open-ended projects also encourage independent analysis.",
    "Initially, yes. The key was sustained training and showing how tech saves time rather than adds work. Pilot groups and peer-support systems helped scale acceptance. Technology shapes the future; if students are not familiar with it, it will be a big negligence on our part.",
    "Hybrid learning is here to stay. It allows flexibility, accommodates diverse learners, and builds digital fluency. The goal is to strike a balance, not replace physical classrooms. It is convenient, but as usual, too much can negatively impact anything."
  ]
};

export const VPInterview_AK_volume2 = {
  title: "Vice Principal's Interview",
  subtitle: "Mr. Anil Kumar Kathuria",
  imageSrc: "/AnilKumarKathuria.png",
  questions: [
    "Technology has become central to students' lives. How do you strike a balance between screen time and mental well-being?",
    "What role does digital citizenship play in student development today?",
    "Have you dealt with incidents involving the misuse of technology among students? How do you approach discipline in such cases?",
    "In your opinion, how can teachers be more proactive in spotting signs of digital distress among students?",
    "How do you see parental involvement evolving in the digital age of education?"
  ],
  answers: [
    "We emphasise creating a healthy balance by integrating technology purposefully in the classroom while encouraging offline activities like physical exercise, creative arts, and social interaction. We educate students on managing screen time by setting limits and promoting mindfulness practices to support their mental well-being because it is about using technology as a tool for learning, not as a substitute for real-life experiences.",
    "Digital citizenship plays a crucial role in student development by teaching them how to navigate the online world responsibly and ethically. It helps students understand the importance of respecting others online, protecting their privacy, and using technology safely. Digital citizenship is as important as physical citizenship in today's modern era.",
    "Yes, unfortunately. Our approach is restorative rather than punitive—we use it as a teachable moment. Counselling, parent involvement, and empathy-building activities are different steps that we incorporate to ensure that the student learns from his mistakes and becomes a better person in the digital world.",
    "Training is essential. Subtle behaviour changes, withdrawal from peers, or over-attachment to devices are signs of the overuse or misuse of devices and technology. Regular teacher-student check-ins help uncover these signs and help us build a better relationship with the student,  allowing us to help him keep a healthier life, physically and digitally.",
    "It’s more critical than ever. We host digital parenting workshops and offer tools to monitor online activity while respecting privacy. Parents and schools must act as partners in keeping the future generation in a safe, but not unaware, environment."
  ]
};

export const VPInterview_MK_volume2 = {
  title: "Vice Principal's Interview",
  subtitle: "Mr. Mukesh Kumar",
  imageSrc: "/MukeshKumar.png",
  questions: [
    "Our school stores much data about students and faculty members. What current contingencies are in place to protect student and staff data? And what, in your opinion, could be improved?",
    "Have you or the school experienced any malicious attacks online? How devastating was it, and how did you deal with it?",
    "We have seen a sharp increase in cybercrime. We should be cautious with our digital footprint to protect ourselves as much as possible, but we should also not be afraid to express ourselves online. In your opinion, where should the line be drawn?",
    "Looking back, what’s one tech initiative or project you feel proud to Have you been part of, especially in a school setting?",
    "You are very involved and in love with tech. If you had to choose one moment of technological transformation in your career, what would it be and why?"
  ],
  answers: [
    "Cybersecurity is crucial. Everything is moving towards the digital side. We can face the consequences if we are cyber-aware and remain innocent. An individual can go through many things, such as money and personal information loss. Anything can happen. Therefore, security is crucial.",
    "As far as the students, faculty, and fees data is concerned, it is well secured and is mainly cloud-based, safeguarded with all precautionary measures considered. There have been a few minor attacks on the Gmail accounts of the schools, but we have been securing them easily, and we have put a lot of filters in place that are not directly related to ERPS.",
    "Cybercrime is a serious issue that requires our attention. We should be cautious and not afraid. Only trusted groups should receive information about our travels and photos. Physical presence is more important than virtual presence, as we don’t know who we deal with. We must protect our family and surroundings. Spreading awareness is crucial. Checking in at hotels or airports can happen anywhere, and posting information on social media can be tracked and used against us. Public footprints should be limited. We should control what we say and do online and secure it. Deleting information doesn’t erase it; it transfers to the Internet Archive and remains forever. We can bypass government-controlled measures on their devices if we hack. We should spread awareness about cybersecurity to assess and protect against any threat. We should also inform our elders not to share personal information. Well-propagated technology is essential for cybersecurity. If you know anything about cybersecurity, please spread the word.",
    "Google was very revolutionary.  It grew from a straightforward search engine to a powerful cloud. Nothing grew as much as he saw the growth. Since then, for over 2 decades, Google has never stopped growing and has become an integral part of our lives. I am intrigued by what kind of future awaits us, especially since technology will play a crucial role.",
    "With the introduction of Google, the world started moving to a different sphere. Before that, there was Hotmail. So, one of the students invited me to Google. At that time, it was not allowed for the public. One and a half months after Gmail was introduced, it grew from a straightforward search engine to a powerful cloud. Nothing has grown as much as Google, and it will help us see our future."
  ]
};
