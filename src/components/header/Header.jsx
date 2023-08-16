import "./header.css";
import whiteCat from "../../assets/white-cat.png";
import CTA from "./CTA";

const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <h4>Hallo, ich bin</h4>
        <h1>Niko Springer</h1>
        <p className="text-light">Fullstack Developer</p>
        <small>
          Ich bin ein begeisterter Fullstack Developer, der immer auf der Suche
          nach neuen Möglichkeiten ist, sein Wissen zu erweitern und Neues zu
          lernen.
        </small>
        <CTA />

        <div className="image">
          <img src={whiteCat} alt="Ein Bild von einer weißen Katze" />
        </div>

        <a href="#contact" className="contact-link">
          Nach unten scrollen
        </a>
      </div>
    </header>
  );
};

export default Header;
