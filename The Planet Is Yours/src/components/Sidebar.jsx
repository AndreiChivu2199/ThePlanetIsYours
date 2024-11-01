import AppNav from "./AppNav";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet></Outlet>

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by PlanetIsYours Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
