import ProjectList from './components/projectList/ProjectList';
import styles from './Home.module.less';

const Home = () => {
  return (
    <>
      <div className={styles.preview}>
        <h1 className={styles.previewText}>
          <span className={styles.previewTitle}>
            Привет, <span style={{ whiteSpace: 'nowrap' }}>я <span className={styles.previewAvatar}></span> Руслан.</span>
          </span>
          <span className={styles.previewSubTitle}>Продуктовый дизайнер.</span>
        </h1>
        <a className={styles.previewFooter} href='#projects'>Познакомимся?</a>
      </div>
      <ProjectList />
    </>
  );
};

export default Home;