import "./styles.css";
import SearchIcon from "/assets/iconos/search-solid.svg";
import ProfileIcon from "/assets/iconos/user-solid.svg";
import CartIcon from "/assets/iconos/shopping-cart-solid.svg";

export const NavigationHeadButtons = () => {
  return (
    <div className="nav__icons">
      <button className="nav__icon-button nav__icon-button--desktop">
        <img
          className="nav__icon"
          width={23.72}
          height={23.72}
          src={SearchIcon}
          alt="Search"
        />
      </button>
      <button className="nav__icon-button nav__icon-button--desktop">
        <img
          className="nav__icon"
          width={20.76}
          height={23.73}
          src={ProfileIcon}
          alt="Profile"
        />
      </button>
      <button className="nav__icon-button">
        <img
          className="nav__icon"
          width={26.69}
          height={23.74}
          src={CartIcon}
          alt="Cart"
        />
      </button>
    </div>
  );
};
