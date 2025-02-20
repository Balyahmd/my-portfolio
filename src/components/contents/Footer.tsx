import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { datas } from "../../datas/data"; // Pastikan path ini sesuai dengan lokasi file datas.ts

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { name, contact } = datas.profile;

  return (
    <footer className="bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-center">
          <p className="text-sm md:text-base">
            Designed and Developed by{" "}
            <span className="font-semibold">{name}</span>
          </p>
          <p className="text-sm md:text-base">
            Copyright © {year} {name.split(" ")[0]}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {contact.github && (
              <a
                href={contact.github}
                className="text-white hover:text-gray-400 transition duration-300 text-2xl"
                target="_blank"
                rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            )}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                className="text-white hover:text-gray-400 transition duration-300 text-2xl"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            )}
            {contact.instagram && (
              <a
                href={contact.instagram}
                className="text-white hover:text-gray-400 transition duration-300 text-2xl"
                target="_blank"
                rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
