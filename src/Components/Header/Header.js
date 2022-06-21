export const Header = () => {
  return (
    <header>
      <div className="header-layout content-width">
        <div className="navbar-align">
          <span className="co-name">Serious Company</span>
          <nav>
            <a href="#about-info" className="about">
              O nas
            </a>
            <a href="#offers" className="offer">
              Oferta
            </a>
            <a href="#offer" className="contact">
              Kontakt
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
