import Roles from "./Roles";
import { useI18n } from "../../i18n/i18n";

const Profession = () => {
  const { t } = useI18n();

  const rolesData = t("profession.roles", []);

  return (
    <div className="content max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-24" id="services">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.2em] text-picto-primary">{t("profession.label")}</p>
        <h2 className="text-2xl xxs:text-3xl sm:text-4xl font-semibold mt-4 text-slate-100">{t("profession.title")}</h2>
        <p className="text-xs sm:text-lg font-normal text-slate-200 mt-4">{t("profession.subtitle")}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
