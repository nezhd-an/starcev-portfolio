import Resume from './components/Resume';
import ruslanPhoto from '@/assets/svg/ruslanPhoto.svg';
import styles from './AboutMe.module.less';

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <img className={styles.aboutMePhoto} src={ruslanPhoto} alt='my-photo' />
        <h1 className={styles.aboutMeName}>Руслан Старцев</h1>
      </div>
      <p className={styles.aboutMeDesription}>Я дизайнер цифровых продуктов. Горжусь своими достижениями, стремлениями и&nbsp;преданностью своей профессии! С горящими глазами иду к поставленным перед собой целям и готов к новому вызову! Я открытый, активный человек, который много времени посвящяет работе.</p>
      <Resume />
    </div>
  );
};

export default AboutMe;