import { ShowcaseCard } from "./projectCard"
import lms from "../../asserts/lms.png";

const showcaseData = [
  {
    title: "Medhavi LMS Service",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
    features: [
      "Awesome visual identities & logo(s)",
      "Intuitive user interface design",
      "Gamification elements integration",
    ],
    imageUrl: lms.src, // Correctly passing the imported image source
  },
  {
    title: "EduTech Platform",
    description:
      "Designed an engaging online learning platform with interactive courses and real-time progress tracking.",
    features: [
      "Responsive course layouts",
      "Interactive quizzes and assessments",
      "User-friendly dashboard",
    ],
    imageUrl: lms.src, // Correctly passing the imported image source
  },
  {
    title: "FinTrack App",
    description:
      "Developed a comprehensive financial tracking application for personal and business use with advanced analytics.",
    features: [
      "Real-time expense tracking",
      "Custom report generation",
      "Multi-currency support",
    ],
    imageUrl: "/placeholder.svg?height=400&width=600", // Placeholder URL
  },
  {
    title: "HealthHub Portal",
    description:
      "Created a centralized health management system for patients and healthcare providers with secure data sharing.",
    features: [
      "Secure patient records",
      "Appointment scheduling",
      "Telemedicine integration",
    ],
    imageUrl: "/placeholder.svg?height=400&width=600", // Placeholder URL
  },
];


export function ProjectSection() {
  return (
    <div className="container mx-auto py-12">
 
        {showcaseData.map((showcase, index) => (
          <ShowcaseCard key={index} {...showcase} />
        ))}
     
    </div>
  )
}

