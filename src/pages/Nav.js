import React from "react";
import { Link } from "react-scroll";
import logo from "../images/logo.png"

function Nav() {
    return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" href="#">
						<img className="logo" src={logo} alt="logo" />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<Link
								smooth={true}
								to="About"
								className="nav-a active"
								href="#"
							>
								About
							</Link>
							<Link smooth={true} to="Skills" className="nav-a" href="#">
								Skills
							</Link>
							<Link smooth={true} to="Porfolio" className="nav-a" href="#">
								Porfolio
							</Link>
							<Link
								smooth={true}
								to="Contact"
								className="nav-a disabled"
								href="#"
								tabindex="-1"
							>
								Contact
							</Link>
						</div>
					</div>
				</div>
			</nav>
		);
}

export default Nav;