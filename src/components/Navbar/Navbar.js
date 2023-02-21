import Container from '../Container/Container';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav>
      <Container>
        <div className={styles.navInner}>
          <a href='/'>
            <i className={'fa fa-tasks'}></i>
          </a>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
            <a href='/favourite'>Favourite</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};