import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Icon from '../../assets/icons/icon/icon';

const Header = () => {
  const aciveNavlink = {
    color: `${Math.random() - 0.03 < 0 ? 'blue' : '#8d8d8d'}`
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigationWrapper}>
          <li className={styles.linkWrapper}>
            <NavLink
              exact
              to="/"
              activeStyle={aciveNavlink}
              onClick={() => null}
              className={styles.Logo}
              id="navLink"
            >
              <Icon icon="Logo" className={styles.logoIcon} />
            </NavLink>
          </li>
          <li className={styles.linkWrapper}>
            <NavLink
              to="/about"
              activeStyle={aciveNavlink}
              onClick={() => null}
              className={styles.navlink}
            >
              About
            </NavLink>
          </li>
          <li className={styles.linkWrapper}>
            <NavLink
              to="/skills"
              activeStyle={aciveNavlink}
              onClick={() => null}
              className={styles.navlink}
            >
              Skills
            </NavLink>
          </li>
          <li className={styles.linkWrapper}>
            <NavLink
              to="/projects"
              activeStyle={aciveNavlink}
              onClick={() => null}
              className={styles.navlink}
            >
              projects
            </NavLink>
          </li>
          <li className={styles.linkWrapper}>
            <NavLink
              to="/contacts"
              activeStyle={aciveNavlink}
              onClick={() => null}
              className={styles.navlink}
            >
              Контакты
            </NavLink>
          </li>
          <li className={styles.linkWrapper}>
            <NavLink
              to="/blog"
              activeStyle={aciveNavlink}
              onClick={() => null}
              className={styles.navlink}
            >
              Блог
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
