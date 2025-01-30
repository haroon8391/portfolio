import React, { useTransition, useState } from "react";
import TabButton from "../Components/TabButton";
import AboutImage from "../Assets/about-image.png";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Next.js</li>
        <li>JavaScript</li>
        <li>React.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Engineering</li>
        <li>National University of Science and Technology, Pakistan</li>
      </ul>
    ),
  },
  {
    title: "AWS",
    id: "aws",
    content: (
      <ul className="list-disc pl-2">
        <li>EC2</li>
        <li>S3 Storage</li>
        <li>IAM Users</li>
        <li>Lambda Functions</li>
        <li>Elastic Beanstalk</li>
        <li>Load Balancing & Auto Scaling</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>DSA in Java ( Udemy ) </li>
        <li>Frontend Developer ( HackerRank )</li>
        <li>Web Development ( IBM )</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="bg-gradient-to-r from-gray-800 to-gray-900 text-white"
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src={AboutImage} width={500} height={500} alt="About" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a software engineer from NUST and a full-stack web developer
            with a passion for creating interactive and responsive web
            applications. I have experience working with JavaScript, React,
            Redux, Node.js, Express, MongoDB, and Git. Additionally, I have
            hands-on experience with AWS services such as EC2, S3, and Lambda
            functions, allowing me to build scalable and cloud-powered
            applications. I am excited to collaborate with others to create
            innovative and efficient solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Web Dev{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("aws")}
              active={tab === "aws"}
            >
              {" "}
              AWS{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default AboutSection;
