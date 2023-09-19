import React from "react";
import styles from "./footer.module.css";
interface FooterProps {
  year: number;
  text: string;
}

const Footer: React.FC<FooterProps> = ({ year, text }) => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer__text}>
        &copy; {year} {text}
      </span>
    </footer>
  );
};

export default Footer;
