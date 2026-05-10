import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useI18n } from "../../../i18n/i18n";

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

// menu will be created inside component to access translations

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const { t, locale, setLocale } = useI18n();

  const navItems = [
    { id: 1, name: t("nav.home"), url: "introduction" },
    { id: 2, name: t("nav.about"), url: "profile" },
    { id: 3, name: t("nav.services"), url: "services" },
    { id: 4, name: t("nav.projects"), url: "projects" },
  ];

  const menu = navItems.map((item) => (
    <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
      <Link
        onClick={handleMenuClick}
        to={item.url.toLowerCase()}
        smooth={true}
        duration={1000}
        spy={true}
        offset={-140}
        activeStyle={{
          backgroundColor: "#06B6D4",
          color: "white",
        }}
        className={`hover:text-picto-primary px-5 py-3 mx-1`}
      >
        {item.name}
      </Link>
    </li>
  ));

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleLocale = () => setLocale(locale === "en" ? "id" : "en");

  return (
    <div className="sticky top-0 bg-white border-b border-gray-300 z-50">
      <div className="navbar flex justify-between mx-auto content">
        <div className="flex items-center justify-between">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-lg dropdown-content rounded-box z-1 mt-3 w-lvw p-2 shadow font-semibold flex-nowrap bg-white text-black`}
            >
              {menu}
            </ul>
          </div>

          <Link
            href="#introduction"
            to={`introduction`}
            smooth={true}
            duration={900}
            className="flex items-center border-0 lg:max-xxl:ps-5"
          >
            <p className="text-[18px] sm:text-[22px] my-auto font-medium tracking-wide text-[#0F172A]">
              {t("common.presisi")}
            </p>
          </Link>
        </div>

        <div className="lg:flex items-center">
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
            {menu}
          </ul>
          <p className="">
            <Link
              className="btn btn-sm xs:btn-md sm:btn-lg btn-primary"
              href="#contact"
              to={`contact`}
              smooth={true}
              duration={900}
            >
              {t("nav.contact")}
            </Link>
          </p>
        </div>

        {/* Floating language toggle (fixed, follows scroll) */}
        <div className="fixed right-10 top-30 z-50 hidden sm:block">
          <div className="bg-white shadow-lg rounded-full px-1 py-1 flex items-center gap-1">
            <button
              onClick={() => setLocale("en")}
              className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors duration-150 ${
                locale === "en" ? "bg-picto-primary text-white" : "text-slate-700"
              }`}
              aria-label="Set language English"
            >
              EN
            </button>
            <div className="text-xs text-slate-400 px-2">|</div>
            <button
              onClick={() => setLocale("id")}
              className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors duration-150 ${
                locale === "id" ? "bg-picto-primary text-white" : "text-slate-700"
              }`}
              aria-label="Set language Indonesian"
            >
              ID
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
