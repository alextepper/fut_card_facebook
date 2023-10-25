import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./footer.css";
export default function Footer() {
  return (
    <div className="stickyFooter">
      <div className="upperDiv">
        <div className="socialLinks">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/alexander-tepper-17697b287/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://instagram.com/tsabolov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className="bottomDiv">
        <p>&copy; 2023 Alex Tepper</p>
      </div>
    </div>
  );
}
