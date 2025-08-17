import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/shared/lib/cn';
import styles from './Navbar.module.less';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li 
          className={cn(styles.navItem, {
            [styles.navItemActive]: location.pathname === '/',
          })}
          onClick={() => navigate('/')}
        >
          Проекты
        </li>
        <li 
          className={cn(styles.navItem, {
            [styles.navItemActive]: location.pathname === '/about-me',
          })}
          onClick={() => navigate('/about-me')}
        >
          О себе
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;