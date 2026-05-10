
import { useI18n } from "../../../i18n/i18n";

const Footer = () => {
  const { t } = useI18n();

  const navItems = [
    { id: 1, name: t("nav.home"), url: "introduction" },
    { id: 2, name: t("nav.about"), url: "profile" },
    { id: 3, name: t("nav.services"), url: "services" },
    { id: 4, name: t("nav.projects"), url: "projects" },
    { id: 5, name: t("nav.contact"), url: "contact" },
  ];

  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <a href="#" className="flex items-center border-0">
          <p className="text-[18px] sm:text-[22px] my-auto font-medium tracking-wide text-neutral-200">{t("common.presisi")}</p>
        </a>
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <a key={item.id} className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]" href={`#${item.url.toLowerCase()}`}>
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
