import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useI18n } from "../../i18n/i18n";

const Projects = ({ data }) => {
  const coverImage = data?.images?.[0] ?? data?.image;

  const { t, locale } = useI18n();

  // choose localized fields when available
  const displayTitle = locale === "id" ? data?.title_id || data?.title : data?.title;
  const displaySummary = locale === "id" ? data?.summary_id || data?.summary : data?.summary;

  return (
    <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200">
      <img
        src={coverImage}
        alt={`${displayTitle} image`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 xs:p-8">
        <p className="text-gray-400 text-xs font-medium">{data?.category}</p>
        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">{displayTitle}</p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-600 text-xs xxs:text-[14px] text-wrap"
        >
          {displaySummary}
        </p>
        <Link
          to={`/projects/${data?.slug}`}
          className="btn hover:border-picto-primary hover:text-picto-primary bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full"
        >
          {t("projects.detailsButton")}
          <span className="ms-1 xs:ms-3">
            <FontAwesomeIcon icon={faArrowRight} size="l" className="" />
          </span>
        </Link>
        {/* </p> */}
      </div>
    </div>
  );
};

export default Projects;
