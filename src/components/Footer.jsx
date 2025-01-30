import React from "react";
import ContentWrapper from "./ContentWrapper";
import { Link } from "react-router-dom";

const Footer = ({ footerData }) => {
  return (
    <footer className="bg-[#2F2B3B] text-[#e5e7eb]">
      <ContentWrapper py="16px">
        <div className="flex items-center justify-between">
          <span>{footerData?.title}</span>
          <div className="flex flex-col">
            {footerData?.links?.map((link, index) => (
              <Link to={link?.href} key={index} className="hover:underline">
                {link?.title}
              </Link>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
