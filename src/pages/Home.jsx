import { useEffect } from "react";
import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Projects from "../components/projects/Projects";
import Profession from "../components/profession/Profession";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  useEffect(() => {
    if (window.location.hash === "#contact") {
      const target = document.getElementById("contact");
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    }
  }, []);

  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="bg-[#2A374A]">
        <Profession />
      </div>
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
