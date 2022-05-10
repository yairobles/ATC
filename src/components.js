import React from 'react';
import { Link } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import routes, { rootPath } from './routes';
import logo from './favicon.ico';

const Navbar = () => {
  return (
     <nav className="navbar navbar-expand-sm navbar-light text-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="react-router-breadcrumb" width="90" height="40" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to={`${rootPath}/`}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${rootPath}/Ofertas`}>
              Ofertas
            </Link>
          </li>

        
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to={`${rootPath}/acerca`}
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Acerca
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link
                className="dropdown-item"
                to={`${rootPath}/acerca/mision`}
              >
               Misión
              </Link>
              <Link
                className="dropdown-item"
                to={`${rootPath}/acerca/vision`}
              >
                Visión
              </Link>
              <Link
                className="dropdown-item"
                to={`${rootPath}/acerca/valores`}
              >
                Valores
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>


  );
};

const Breadcrumb = ({ locationPath, onMatchedRoutes }) => {
  let matchedRoutes = matchRoutes(routes, locationPath);

  if (typeof onMatchedRoutes === 'function') {
    matchedRoutes = onMatchedRoutes(matchedRoutes);
  }

  return (
    <nav>
      <ol className="breadcrumb">
        {matchedRoutes.map((matchRoute, i) => {
          const { path, breadcrumbName } = matchRoute.route;
          const isActive = path === locationPath;

          return isActive ? (
            <li key={i} className="breadcrumb-item active">
              {breadcrumbName}
            </li>
          ) : (
            <li key={i} className="breadcrumb-item">
              <Link to={path}>{breadcrumbName} </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};



export { Navbar, Breadcrumb };
