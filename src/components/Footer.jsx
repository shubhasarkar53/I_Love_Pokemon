import React from "react";
import Pokemon from "../assets/image/Footer/pokeball.png";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 ">
      <Container>
        <div className="flex items-center">
          <div className="w-[40px]">
            <img src={Pokemon} alt="Pokeball" />
          </div>
          <div className="container mx-auto text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} I love Pokemon. All rights
              reserved.
            </p>
            <div className="mt-2">
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-gray-100 mx-2"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-gray-400 hover:text-gray-100 mx-2"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
