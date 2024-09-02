import React from "react";
import image1 from "../Assets/picture 1.jpg";
import image2 from "../Assets/picture2.jpg";
import image3 from "../Assets/picture3.jpg";
import image4 from "../Assets/picture4.bmp";
import image5 from "../Assets/picture5.jpg";
import image6 from "../Assets/picture6.jpg";
import image8 from "../Assets/picture8.jpg";
import image9 from "../Assets/picture9.jpg";

const projects = [
  {
    name: "Ecommerce BuyNow Website",
    image: image1,
    projectLink: "https://mern-deploy-liart.vercel.app",
    githubLink: "https://github.com/haroon8391/MERN-Ecommerce",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    name: "Instagram Clone",
    image: image2,
    projectLink: "https://instagram-clone-haroon8391s-projects.vercel.app/",
    githubLink: "https://github.com/haroon8391/Instagram_Clone",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
  },
  {
    name: "Blog Website",
    image: image3,
    projectLink:
      "http://blogify-env.eba-tsfekyps.ap-south-1.elasticbeanstalk.com/",
    githubLink: "https://github.com/haroon8391/Insightful_Blogs",
    technologies: ["React", "Node.js", "Express", "MongoDB", "AWS EB"],
  },
  {
    name: "Real Estate Hub Web App",
    image: image9,
    projectLink: "https://github.com/haroon8391/Real-Estate-app",
    githubLink: "https://github.com/haroon8391/Real-Estate-app",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
  },
  {
    name: "MERN Stack Ecommerce Website",
    image: image4,
    projectLink: "https://github.com/haroon8391/StoreDash",
    githubLink: "https://github.com/haroon8391/StoreDash",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    name: "React Text Utility App",
    image: image5,
    projectLink: "https://github.com/haroon8391/TextToolbox",
    githubLink: "https://github.com/haroon8391/TextToolbox",
    technologies: ["React", "Javascript", "Bootstrap"],
  },
  {
    name: "News Beat",
    image: image6,
    projectLink: "https://github.com/haroon8391/NewsBeat",
    githubLink: "https://github.com/haroon8391/NewsBeat",
    technologies: ["React", "Javascript", "Bootstrap"],
  },
  {
    name: "Coding Blogs Website",
    image: image8,
    projectLink: "/",
    githubLink: "https://github.com/haroon8391",
    technologies: ["React", "Javascript", "Bootstrap"],
  },

  // Add more projects here
];

const Projects = () => {
  return (
    <>
      <div
        id="projects"
        className="lg:min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl font-extrabold mb-12 text-center">
            Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              >
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="projImages w-full h-[267px] object-cover md:w-auto"
                  />
                </a>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                  <p className="text-sm text-gray-400 mb-4">
                    {project.technologies.join(", ")}
                  </p>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:underline"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12c0 4.418 2.867 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.153-1.11-1.46-1.11-1.46-.907-.621.069-.608.069-.608 1.003.07 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.092-.647.349-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.092.39-1.986 1.029-2.683-.103-.253-.446-1.27.097-2.648 0 0 .84-.27 2.75 1.026A9.548 9.548 0 0112 6.844c.852.004 1.71.115 2.51.338 1.908-1.296 2.747-1.026 2.747-1.026.545 1.379.202 2.396.099 2.648.641.697 1.027 1.591 1.027 2.683 0 3.842-2.339 4.685-4.566 4.931.359.309.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.135 20.165 22 16.418 22 12c0-5.52-4.48-10-10-10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Projects;
