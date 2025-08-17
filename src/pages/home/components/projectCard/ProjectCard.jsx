import { cn } from '@/shared/lib/cn';
import styles from './ProjectCard.module.less';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.project}>
      <img className={styles.projectImg} src={project.image} alt='project-photo' />
      <div className={styles.projectInfo}>
        <div className={styles.projectText}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDate}>{project.date}</p>
        </div>
        {project.type === 'web' ? (
          <div className={cn(styles.projectType, styles.projectTypeWeb)}>
            Web
          </div>
        ) : (
          <div className={cn(styles.projectType, styles.projectTypeMobile)}>
            Mobile
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;