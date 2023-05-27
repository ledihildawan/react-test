import "./Footer.scss";

import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container main-footer__container">
        <Logo type="footer" />

        <p className="main-footer__about">
          Movie App built with React for the assessment test by PT LAWENCON
          INTERNATIONAL.
        </p>

        <p className="main-footer__copyright">
          PT Lawencon Internasional &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
