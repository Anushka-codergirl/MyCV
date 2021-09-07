const Header = ({ dark, children }) => {
  dark = !!dark ? "dark" : "light";
  return (
    <header>
      <div className={`navbar navbar-${dark} bg-${dark} shadow-sm`}>
        <div className="container">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img
              src="https://img.icons8.com/office/30/000000/resume.png"
              className="me-2"
              alt="CV"
            />
            {children}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
