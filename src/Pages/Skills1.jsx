import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../ui/reveal-effect";

const frontEnd = [
  "React.js",
  "Next.js",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
];
const backEnd = ["Express.js", "Node.js", "Mongoose", "NextJs", "Firebase"];
const variegated = ["AWS", "DSA", "MongoDB", "GIT", "REST", "Postman"];

export default function SkillsSection() {
  return (
    <>
      <div className="w-full font-black text-center bg-gradient-to-r from-gray-800 to-gray-900">
        <h1 className="text-[4rem] text-white">Skills</h1>
      </div>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 w-full gap-4 mx-auto px-8">
        <Card innerName={frontEnd} outerName={"Frontend"}>
          <CanvasRevealEffect
            animationSpeed={3}
            colors={[
              [0, 128, 255],
              [0, 204, 204],
            ]}
            dotSize={2}
          />
        </Card>
        <Card innerName={backEnd} outerName={"Backend"}>
          <CanvasRevealEffect
            animationSpeed={3}
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card innerName={variegated} outerName={"Variegated"}>
          <CanvasRevealEffect
            animationSpeed={3}
            colors={[
              [121, 85, 72],
              [139, 195, 74],
            ]}
            dotSize={2}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({ innerName, outerName, children }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border group/canvas-card flex items-center justify-center border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] overflow-hidden"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-full flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="group-hover/canvas-card:opacity-0 transition duration-200 w-full flex items-center justify-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-center">
              {outerName}
            </p>
          </div>
          <div className="h-full flex flex-col justify-between text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 font-bold transition duration-200">
            {innerName.map((elem, idx) => (
              <p key={idx} className="text-center">
                {elem}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
