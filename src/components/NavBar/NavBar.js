import NavBarOption from './NavBarOption';
export default function NavBar({ navBarOptions }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container ">
        <span className="navbar-brand">Navbar</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto d-flex flex-wrap">
            {navBarOptions.main.map((navBarOption, index) => (
              <NavBarOption key={index} navBarOption={navBarOption} />
            ))}
          </ul>
          <ul className="navbar-nav">
            {navBarOptions.right.map((navBarOption, index) => (
              <NavBarOption key={index} navBarOption={navBarOption} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
