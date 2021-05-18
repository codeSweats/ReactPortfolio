import React from "react";
import { Link } from "react-scroll";

function Nav() {
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand" href="#">
					Navbar
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
						<Link className="nav-a active" aria-current="page" href="#">
							Home
						</Link>
						<Link className="nav-a" href="#">
							Features
						</Link>
						<Link className="nav-a" href="#">
							Pricing
						</Link>
						<Link
							className="nav-a disabled"
							href="#"
							tabindex="-1"
							aria-disabled="true"
						>
							Disabled
						</Link>
					</div>
				</div>
			</div>
		</nav>
    )
}

export default Nav;