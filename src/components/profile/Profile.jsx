import about from "../../assets/about-us-page.svg";
import { useI18n } from "../../i18n/i18n";

const Profile = () => {
  const { t } = useI18n();

  const heading = t("profile.heading");

  return (
    <div className="content mt-12 md:mt-18 pt-10 pb-16 md:pt-16 md:pb-20 px-2" id="profile">
      <div className="flex max-md:flex-col justify-between items-center gap-10">
        <div className="w-full max-w-[460px] flex justify-center">
          <img className="w-full h-auto object-contain" src={about} alt="about illustration" />
        </div>
        <div className="max-sm:w-full w-[34rem]">
          <p className="text-sm font-semibold tracking-[0.2em] text-picto-primary">{t("profile.label")}</p>
          <h2 className="text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] font-semibold mt-4">
            {heading[0]}
            <br />
            {heading[1]}
          </h2>
          <div className="h-1 w-12 bg-picto-primary rounded-full mt-4" />
          <p className="text-xs xs:text-[16px] lg:text-lg font-normal text-gray-600 mt-6">{t("profile.description")}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
