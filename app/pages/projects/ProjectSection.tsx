import ProjectCard from "./projectCard";
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
    link: "https://example.com/medhavi-lms", // Example project link
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
    link: "https://example.com/edutech-platform", // Example project link
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
    link: "https://example.com/fintrack-app", // Example project link
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
    link: "https://example.com/healthhub-portal", // Example project link
  },
];

export function ProjectSection() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto py-12 gap-10">
      {showcaseData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          points={project.features.map((feature) => ({
            text: feature, // Using simplified feature list
          }))}
          imageSrc={project.imageUrl}
          buttonLabel="View Project"
          link={project.link} // Passing the project link
        />
      ))}
    </div>
  );
}
