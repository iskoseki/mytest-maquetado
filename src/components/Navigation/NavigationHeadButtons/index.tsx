import "./styles.css";
import SearchIcon from "/assets/iconos/search-solid.svg";
import ProfileIcon from "/assets/iconos/user-solid.svg";
import CartIcon from "/assets/iconos/shopping-cart-solid.svg";

export const NavigationHeadButtons = () => {
  return (
    <div className="nav__icons">
      <button className="nav__icon-button nav__icon-button--desktop">
        <img className="nav__icon" src={SearchIcon} alt="Search" />
      </button>
      <button className="nav__icon-button nav__icon-button--desktop">
        <img className="nav__icon" src={ProfileIcon} alt="Profile" />
      </button>
      <button className="nav__icon-button">
        <img className="nav__icon" src={CartIcon} alt="Cart" />
      </button>
    </div>
  );
};
