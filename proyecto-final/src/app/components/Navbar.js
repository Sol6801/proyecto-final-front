import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Planner Buddy</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">Amigos</Link></li>
        <li><Link href="/services">Grupos</Link></li>
        <li><Link href="/contact">Usuario</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
