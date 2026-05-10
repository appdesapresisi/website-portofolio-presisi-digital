import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";
import { I18nProvider } from "../i18n/i18n";

const Main = () => {
  const location = useLocation();
  const isProjectDetails = location.pathname.includes("/projects/");

  return (
    <I18nProvider>
      <div data-theme={"light"} className="relative">
        {!isProjectDetails && <NavBar />}
        <Outlet />
        {!isProjectDetails && (
          <div className="bg-[#2A374A]">
            <Footer />
          </div>
        )}
        {!isProjectDetails && <ScrollToTop />}
      </div>
    </I18nProvider>
  );
};

export default Main;
