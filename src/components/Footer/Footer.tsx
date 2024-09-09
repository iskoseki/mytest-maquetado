import "./styles.css";
export default function Footer() {
  return (
    <footer className="footer__container">
      <ul className="footer__list">
        <li>
          <a className="footer__link" href="/">
            Ayuda
          </a>
        </li>
        <li>
          <a className="footer__link" href="/">
            Contacto
          </a>
        </li>
        <li>
          <a className="footer__link" href="/">
            Términos y condiciones
          </a>
        </li>
        <li>
          <a className="footer__link" href="/">
            Políticas de privacidad
          </a>
        </li>
      </ul>
    </footer>
  );
}
