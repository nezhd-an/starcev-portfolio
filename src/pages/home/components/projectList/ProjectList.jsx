import { projects } from '@/data/data.js';
import projectsIcon from '@/assets/svg/projectsIcon.svg';
import ProjectCard from '../projectCard/ProjectCard';
import styles from './ProjectList.module.less';

const ProjectList = () => {
  return (
    <div className={styles.projects} id='projects'>
      <h2 className={styles.projectsTitle}>
        <img className={styles.projectsIcon} src={projectsIcon} alt='projects-icon'/>
        Мои проекты
      </h2>
      <div className={styles.projectsList}>
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
};

export default ProjectList;