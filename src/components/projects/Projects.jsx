import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
import { useI18n } from "../../i18n/i18n";

const Projects = () => {
  const { t } = useI18n();

  return (
    <div className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2" id="projects">
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">{t("projects.sectionTitle")}</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">{t("projects.sectionSubtitle")}</p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard data={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
