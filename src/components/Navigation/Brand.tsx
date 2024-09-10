import Logo from "/logo.svg";

export default function Brand() {
  return (
    <div className="nav__brand">
      <img className="nav__logo" src={Logo} alt="Logo" />
    </div>
  );
}
