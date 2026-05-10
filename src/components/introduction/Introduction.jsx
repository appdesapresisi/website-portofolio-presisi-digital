import programmer from "../../assets/programmer.svg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { useI18n } from "../../i18n/i18n";

const Introduction = () => {
  const { t } = useI18n();

  const informationSummaryData = [
    { id: 1, title: t("introduction.info.projectsDelivered"), description: "4+" },
    { id: 2, title: t("introduction.info.happyClients"), description: "4+" },
    { id: 3, title: t("introduction.info.onTimeDelivery"), description: "100%" },
  ];

  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between items-center pt-10 lg:pt-24 lg:mb-10 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-2xl xxs:text-3xl sm:max-xl:text-4xl xl:text-5xl font-semibold w-full">
            {t("introduction.headline")}
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">{t("introduction.subtext")}</p>
          <p className="text-center lg:text-start">
            <a className="btn-primary btn btn-xs xxs:btn-lg text-white" href="#contact">
              {t("introduction.contactButton")}
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-134 w-full max-lg:mx-auto flex justify-center items-center">
        <img className="w-full h-auto max-w-[520px] object-contain" src={programmer} alt="programmer illustration" />
      </div>
    </div>
  );
};

export default Introduction;
