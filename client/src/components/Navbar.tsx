import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItem = [
    {
      title: "Genders",
      path: "/genders", // Added a valid route path
    },
    {
      title: "Users",
      path: "/users", // Added a valid route path
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          RNL_Demo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {menuItem.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={item.path}>
                  {" "}
                  {/* Updated to use the correct path */}
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
