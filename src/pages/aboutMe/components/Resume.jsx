import { resume } from '@/data/data.js';
import projectsIcon from '@/assets/svg/projectsIcon.svg';
import styles from './Resume.module.less';

const Resume = () => {
  return (
    <div className={styles.resume}>
      {resume.map((block) => {
        return (
          <div className={styles.resumeBlock} key={block.id}>
            <h3 className={styles.resumeBlockTitle}>
              <img className={styles.resumeBlockIcon} src={projectsIcon} alt='projects-icon'/>
              {block.title}
            </h3>
            <ul className={styles.resumeBlockList}>
              {block.list.map((e) => {
                return (
                  <li className={styles.resumeBlockItem} key={e.id}>
                    <p>{e.title}</p>
                    {e.date && <p className={styles.resumeBlockDate}>{e.date}</p>}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Resume;