import arrowTop from '@/assets/svg/arrowTop.svg';
import styles from './Footer.module.less';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <p className={styles.footerAuthor}>© Ruslan Startsev</p>
      <img 
        className={styles.footerArrowTop} 
        onClick={scrollToTop} 
        src={arrowTop} 
        alt='arrow-top' 
      />
    </footer>
  );
};

export default Footer;