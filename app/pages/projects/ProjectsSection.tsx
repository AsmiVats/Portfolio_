import React from 'react';
import lms from "../../asserts/lms.png";
import medicall from "../../asserts/medicall.png";
import hireatease from "../../asserts/hireatease.png";
import facto from "@/app/asserts/Facto.png"

const ProjectsSection: React.FC = () => {
    const cards = [
        {
            "id": "card1",
            "title": "Medhavi LMS Service",
            "description": "A powerful Learning Management System designed for seamless course management, progress tracking, and gamified learning experiences.",
            "features": [
                "Effortless course creation and student progress tracking",
                "Secure role-based access for admins, instructors",
                "Comprehensive analytics dashboard for insights "
            ],
            "techStack": ["React", "MongoDB", "Node.js"],
            "projectLink": "https://example.com/medhavi-lms",
            "image": lms.src,
            "bgColor": "bg-[#F4F2EF]",
            "featuresbgColor": "bg-[#EAE8E1]",
            "size": "h-[70vh] w-[70vw]"
        },
        {
            "id": "card2",
            "title": "Medipred SDK - AI Medical Assistance",
            "description": "An AI-driven SDK for medical assistance, seamlessly connecting hospitals and doctors for rapid disease detection and diagnosis.",
            "features": [
                "Seamless integration with hospital management systems",
                "Real-time doctor-patient consultation assistance",
                "Secure API endpoints ensuring data privacy and compliance"
            ],
            "techStack": ["Python", "TensorFlow", "Flask"],
            "projectLink": "https://example.com/medipred-ai",
            "image": medicall.src,
            "bgColor": "bg-[#E5DBEB]",
            "featuresbgColor": "bg-[#DECAE8]",
            "size": "h-[73vh] w-[73vw]"
        },
        {
            "id": "card3",
            "title": "Hireatease - Smart Hiring Platform",
            "description": "A streamlined hiring platform designed for effortless recruiter-candidate connections with direct call interview integration.",
            "features": [
                "One-click direct call interview scheduling with Twilio",
                "Comprehensive applicant tracking and resume parsing",
                "Secure and scalable backend for high traffic handling"
            ],
            "techStack": ["React", "MongoDB", "Express.js", "Twilio"],
            "projectLink": "https://example.com/hireatease",
            "image": hireatease.src,
            "bgColor": "bg-[#D2E8C8]",
            "featuresbgColor": "bg-[#C1DEAF]",
            "size": "h-[76vh] w-[76vw]"
        },
        {
            "id": "card4",
            "title": "Facto Admin Panel - Service Management",
            "description": "A comprehensive admin panel for managing service providers, users, and operations with advanced role-based controls.",
            "features": [
                "Intelligent dashboard with real-time analytics and reporting",
                "Admin, service provider, and customer role-based access control",
                "Seamless service request and approval management",
            ],
            "techStack": ["React.js", "Node.js", "MongoDB"],
            "projectLink": "https://example.com/project4",
            "image": facto.src,
            "bgColor": "bg-[#DCE4EA]",
            "featuresbgColor": "bg-[#CCD3D9]",
            "size": "h-[79vh] w-[79vw]"
        }
    ]
    

    return (
      <>
        <div className="container mt-4 mx-auto p-4 flex flex-col items-center">
            <h2 className='font-degular-display text-[40px] font-[500] my-4'>Explore My Projects</h2>
            <p className='text-center mb-8'>Our works are a blend of innovative thinking and practical solutions,
            <br/>
            ensuring they are both unique and effective.
            </p>
            <ul className="grid grid-cols-1 gap-[4vw] w-full justify-center items-center">
                {cards.map((card, index) => (
                    <li
                        className="sticky top-0 flex justify-center"
                        id={card.id}
                        key={card.id}
                        style={{ '--index': index + 1 } as React.CSSProperties}
                    >
                        <div
                            className={`card-body ${card.bgColor} flex rounded-3xl  transition-all duration-500 p-8 ${card.size} flex justify-center items-center animate-on-scroll`}
                        >
                            <div className="flex flex-col justify-center w-1/2 text-left">
                                <h2 className="text-[24px] font-bold mb-4 font-[degular-display]">{card.title}</h2>
                                <p className=" text-lg mb-4 font-[manrope]">{card.description}</p>

                                {/* Features as badges */}
                                <div className="flex flex-col flex-wrap gap-3 mb-4">
                                    {card.features.map((feature, i) => (
                                        <span key={i} className={`${card.featuresbgColor} text-black text-[14px] px-3 py-1 rounded-full w-3/4`}>{feature}</span>
                                    ))}
                                </div>

                                {/* Tech Stack */}
                                <p className=" text-sm mb-2 font-semibold">Tech Stack:</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {card.techStack.map((tech, i) => (
                                        <span key={i} className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">{tech}</span>
                                    ))}
                                </div>

                                {/* View Project Button */}
                                <a href={card.projectLink} target="_blank" rel="noopener noreferrer">
                                    <button className="bg-transparent text-black px-4 py-2 rounded-full  hover:underline transition">
                                        View Project →
                                    </button>
                                </a>
                            </div>
                            <div className="w-1/2 flex justify-center items-center">
                                <img src={card.image} alt={card.title} className="rounded-xl shadow-lg w-[80%]" />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      </>
    );
};

export default ProjectsSection;
