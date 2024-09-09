import "./styles.css";
export default function NavigationList() {
  return (
    <ul className="nav__list">
      <li>
        <a className="nav__link nav__link--active" href="/">
          SALE
        </a>
      </li>
      <li>
        <a className="nav__link" href="/">
          E-SHOP
        </a>
      </li>
      <li>
        <a className="nav__link" href="/">
          LOOKBOOK
        </a>
      </li>
      <li>
        <a className="nav__link" href="/">
          CAMPAÑA
        </a>
      </li>
      <li>
        <a className="nav__link" href="/">
          LOCALES
        </a>
      </li>
    </ul>
  );
}
