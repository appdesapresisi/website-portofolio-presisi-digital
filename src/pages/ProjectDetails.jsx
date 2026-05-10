import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { useI18n } from "../i18n/i18n";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const baseUrl = import.meta.env.BASE_URL || "/";

  const { t, locale, setLocale } = useI18n();

  const displayTitle = locale === "id" ? project.title_id || project.title : project.title;

  if (!project) {
    return (
      <div className="content py-16 px-2">
        <p className="text-lg font-semibold text-slate-800">{t("project.notFoundTitle")}</p>
        <p className="text-slate-600 mt-2">{t("project.notFoundDesc")}</p>
        <Link className="mt-4 inline-block" to="/#projects">
          {t("project.backToProjects")}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="content py-6 px-2">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <p className="text-slate-900 font-semibold">Presisi Digital</p>
          <Link to="/#projects" className="font-medium">
            ← Back to Projects
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-200 mb-5" />

      <div className="content pt-6 pb-10 md:pt-8 md:pb-14 px-2">
        <p className="text-xs sm:text-sm text-slate-500">
          {t("project.breadcrumb")} {displayTitle}
        </p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-4">
          {displayTitle}
        </h1>
        <p className="text-slate-600 mt-4 text-sm sm:text-base max-w-3xl">
          {locale === "id" ? project.summary_id || project.summary : project.summary}
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wide">
              Timeline
            </p>
            <p className="text-slate-800 font-semibold mt-1">{project.timeline}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wide">
              Type
            </p>
            <p className="text-slate-800 font-semibold mt-1">{project.typeLabel}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wide">
              Year
            </p>
            <p className="text-slate-800 font-semibold mt-1">{project.year}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wide">
              Status
            </p>
            <p className="text-slate-800 font-semibold mt-1">{project.status}</p>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-8" />

        <div className="mt-8">
          <p className="text-xs text-picto-primary font-semibold tracking-[0.25em]">
            {t("project.overview")}
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold mt-3">
            {locale === "id" ? project.overviewTitle_id || project.overviewTitle : project.overviewTitle}
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base max-w-3xl">
            {locale === "id" ? project.overview_id || project.overview : project.overview}
          </p>
        </div>

        <div className="mt-8">
          <p className="text-xs text-picto-primary font-semibold tracking-[0.25em]">
            {t("project.keyFeatures")}
          </p>
          <ul className="mt-4 space-y-3 text-slate-700 text-sm sm:text-base">
            {(locale === "id" ? project.features_id || project.features : project.features).map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-picto-primary mt-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <p className="text-xs text-picto-primary font-semibold tracking-[0.25em]">
            {t("project.screenshots")}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {project.images.map((image, index) => (
              <a
                key={`${project.slug}-shot-${index}`}
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200 rounded-xl p-3 block"
                aria-label={`Open ${displayTitle} screenshot ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${displayTitle} screenshot ${index + 1}`}
                  className="w-full h-80 rounded-lg object-cover"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 bg-[#0F172A] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white text-base sm:text-lg font-semibold">{t("project.ctaTitle")}</p>
          <a href={`${baseUrl}#contact`} className="btn btn-primary text-white text-sm sm:text-base">
            {t("project.ctaButton")}
          </a>
        </div>
      </div>
      {/* Floating language toggle for Project Details (match navbar position) */}
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
  );
};

export default ProjectDetails;
