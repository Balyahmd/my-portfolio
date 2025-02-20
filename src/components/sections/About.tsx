import { FC } from "react";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { datas } from "../../datas/data.ts";

type AboutProps = object;

export const About: FC<AboutProps> = () => {
  const { profile, education, experience, skills } = datas;
  return (
    <section className="min-h-screen flex items-center justify-center py-20 top-0 left-0 w-full overflow-hidden">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-700 to-red-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">{profile.bio}</p>

            {/* SKILLS SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontEnd.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-red-700 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backEnd.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-red-700 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* EDUCATION & EXPERIENCE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* EDUCATION */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {education.map((edu, index) => (
                  <li key={index}>
                    <strong>{edu.degree}</strong> - {edu.institution} (
                    {edu.year})
                  </li>
                ))}
              </ul>
            </div>

            {/* EXPERIENCE */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Experience </h3>
              <div className="space-y-4 text-gray-300">
                {experience.map((exp, index) => (
                  <div key={index}>
                    <h4 className="font-semibold">{exp.posision}</h4>
                    <p className="my-2">( {exp.year} )</p>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
