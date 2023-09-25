import styles from "./NavBar.module.css";
import NavBarLink from "./NavBarLink";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <NavBarLink to="/">Home</NavBarLink>
      <NavBarLink to="/about">About</NavBarLink>
      <NavBarLink to="/shows">Shows</NavBarLink>
    </nav>
  );
}
export default NavBar;
