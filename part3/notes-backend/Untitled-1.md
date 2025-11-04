import {Link, useLocation} from "react-router-dom";
import {useAuth} from "../../context/hooks/useAuth";

const Navbar = () => {
const {user, logout} = useAuth();
const location = useLocation();

    const handleLogout = () => {
        logout();
    };

    const getNavLinkClass = (path) => {
        return location.pathname === path ? "nav-link active" : "nav-link";
    };

    return (
        <nav
            className="navbar navbar-expand-xxl bg-secondary-90"
            data-home="false"
            style={{color: "#284D21"}}
        >
            <ul className="navbar-nav flex-row">
                {/* Condicional para el usuario loggeado Perfil*/}
                {user && (
                    <div className="user-section user-section-secondary avatar-secondary">
                        <div
                            className="user-section-avatar avatar-mn"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <div className="avatar avatar-mn"></div>
                            <div className="user-section-indicator"></div>
                        </div>
                        <div className="user-section-menu dropdown-menu dropdown-menu-end">
                            <div className="user-section-avatar-info">
                                <div className="avatar avatar-mn"></div>
                                <div>
                                    <p className="fw-bold">{user.nombreUsuario}</p>
                                    <p>{user.correoElectronicoUsuario}</p>
                                </div>
                            </div>
                            <hr/>
                            <a className="user-section-menu-item">
                                <div className="user-section-menu-item-content">
                  <span
                      className="material-symbols-outlined icon"
                      translate="no"
                      style={{userSelect: "none"}}
                  >
                    settings
                  </span>
                                    Configuración
                                </div>
                            </a>

                            <a className="user-section-menu-item">
                                <div className="user-section-menu-item-content">
                  <span
                      className="material-symbols-outlined icon"
                      translate="no"
                      style={{userSelect: "none"}}
                  >
                    security
                  </span>
                                    Seguridad
                                </div>
                            </a>

                            <a className="user-section-menu-item">
                                <div className="user-section-menu-item-content">
                  <span
                      className="material-symbols-outlined icon"
                      translate="no"
                      style={{userSelect: "none"}}
                  >
                    construction
                  </span>
                                    Herramientas
                                </div>
                            </a>

                            <hr className="hr bg-neutral-80"/>

                            <button
                                className="user-section-menu-item d-flex gap-3 btn btn-link p-0 text-start w-100"
                                onClick={handleLogout}
                            >
                                <div className="user-section-menu-item-content">
                                    <span className="material-symbols-outlined icon">logout</span>
                                    Cerrar Sesión
                                </div>
                            </button>
                        </div>
                    </div>
                )}
            </ul>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
        <span
            className="material-symbols-outlined"
            translate="no"
            style={{userSelect: "none"}}
        >
          menu
        </span>
            </button>

            <div className="container-fluid">
                <div
                    className="collapse navbar-collapse w-100"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav nav nav-neutral ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className={getNavLinkClass("/")}
                                to="/"
                                style={{color: "#284D21"}}
                            >
                <span
                    className="material-symbols-outlined"
                    style={{color: "#284D21", userSelect: "none"}}
                    translate="no"
                >
                  home
                </span>
                                Inicio
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className={getNavLinkClass("/realizar-solicitudes")}
                                to="/realizar-solicitudes"
                                style={{color: "#284D21"}}
                            >
                <span
                    className="material-symbols-outlined"
                    translate="no"
                    style={{userSelect: "none"}}
                >
                  add_circle
                </span>
                                Realizar solicitudes
                            </Link>
                        </li>

                        {/* Condicional para el usuario no loggeado Registro e Inicio de sesion*/}
                        {!user && (
                            <>
                                <li className="nav-item">
                                    <Link
                                        className={getNavLinkClass("/register")}
                                        to="/register"
                                        style={{color: "#284D21"}}
                                    >
                    <span
                        className="material-symbols-outlined"
                        translate="no"
                        style={{userSelect: "none"}}
                    >
                      app_registration
                    </span>
                                        Registrarse
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={getNavLinkClass("/login")}
                                        to="/login"
                                        style={{color: "#284D21"}}
                                    >
                    <span
                        className="material-symbols-outlined"
                        translate="no"
                        style={{userSelect: "none"}}
                    >
                      login
                    </span>
                                        Iniciar Sesión
                                    </Link>
                                </li>
                            </>
                        )}

                        {/* Condicional para el usuario loggeado Opciones del Navbar*/}
                        {user && (
                            <>
                                {user.perfilUsuario === 'unidad_logistica' ? (
                                    <>
                                        <li className="nav-item">
                                            <Link
                                                className={getNavLinkClass("/solicitudes-pendientes")}
                                                to="/solicitudes-pendientes"
                                                style={{color: "#284D21"}}
                                            >
                                                Solicitudes Pendientes
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className={getNavLinkClass("/historial-casos")}
                                                to="/historial-casos"
                                                style={{color: "#284D21"}}
                                            >
                                                Historial de casos
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <Link
                                                className={getNavLinkClass("/mis-solicitudes")}
                                                to="/mis-solicitudes"
                                                style={{color: "#284D21"}}
                                            >
                            <span
                                className="material-symbols-outlined"
                                translate="no"
                                style={{userSelect: "none"}}
                            >
                              inbox
                            </span>
                                                Mis solicitudes
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link
                                                className={getNavLinkClass("/permisos-de-ingreso")}
                                                to="/permisos-de-ingreso"
                                                style={{color: "#284D21"}}
                                            >
                    <span
                        className="material-symbols-outlined"
                        translate="no"
                        style={{userSelect: "none"}}
                    >
                      folder_open
                    </span>
                                                Permisos de ingreso
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );

};

export default Navbar;
