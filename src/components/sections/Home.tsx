import { FC } from "react";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import DecryptedText from "../../animations/TextAnimations/DecryptedText";
import { Link } from "react-router-dom";
import { datas } from "../../datas/data.ts";
import SocialIcons from "../contents/SocialIcons.tsx";

export const Home: FC = () => {
  const { profile } = datas;
  return (
    <section className="min-h-screen flex items-center justify-center top-0 left-0 w-full overflow-hidden">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <div className="pb-5">
            <SocialIcons />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-700 to-red-600 bg-clip-text text-transparent">
            Hi, {profile.title}
          </h1>

          <div className="mb-8 text-md md:text-lg max-w-lg mx-auto overflow-hidden">
            <DecryptedText
              text="I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience."
              speed={100}
              maxIterations={20}
              className=" text-gray-400"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <Link
              to="/projects"
              className="bg-red-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              View Projects
            </Link>

            <Link
              to="/contact"
              className="border border-red-700/50 text-red-700 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-red-500/10">
              Contact Me
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
