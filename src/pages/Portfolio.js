import React from "react";


function Portfolio() {
    return (
			<div className="container" name="Porfolio">
				<div className="card" style={{ width: "18rem" }}>
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Short-Order Cookies</h5>
						<p className="card-text">
							An app that keeps track of tasks and organizes thoughts for small
							business owners.
						</p>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">Javascript</li>
						<li className="list-group-item">Node JS</li>
						<li className="list-group-item">Express</li>
					</ul>
					<div className="card-body">
						<a
							href="https://github.com/codeSweats/ShortOrderCookies"
							className="card-link"
						>
							GitHub Repo
						</a>
						<a
							href="https://codesweats.github.io/ShortOrderCookies/"
							className="card-link"
						>
							Published App
						</a>
					</div>
				</div>
				<div className="card" style={{ width: "18rem" }}>
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Password Generator</h5>
						<p className="card-text">Quick and easy password generator!</p>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">Javascript</li>
						<li className="list-group-item">HTML</li>
						<li className="list-group-item">CSS</li>
					</ul>
					<div className="card-body">
						<a
							href="https://github.com/codeSweats/PasswordGen"
							className="card-link"
						>
							GitHub Repo
						</a>
						<a
							href="https://codesweats.github.io/PasswordGen/"
							className="card-link"
						>
							Published App
						</a>
					</div>
				</div>
				<div className="card" style={{ width: "18rem" }}>
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Workday Planner</h5>
						<p className="card-text">
							A daily planner that has color coordinations indicating which
							event time slots has expired in real-time.
						</p>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">Javascript</li>
						<li className="list-group-item">HTML</li>
						<li className="list-group-item">CSS</li>
					</ul>
					<div className="card-body">
						<a
							href="https://github.com/codeSweats/WorkDayPlanner"
							className="card-link"
						>
							GitHub Repo
						</a>
						<a
							href="https://codesweats.github.io/WorkDayPlanner/"
							className="card-link"
						>
							Published App
						</a>
					</div>
				</div>
			</div>
		);
}

export default Portfolio;
