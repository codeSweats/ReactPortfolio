import React from "react";
import Avatar from "../images/avatar.png";

function About() {
    return (
			<div className="container py-5" id="about">
				<div className="row">
					<div className="col-lg-6 col-xm-12">
						<div className="photo-wrap">
							<img className="profile" src={Avatar} alt="profile picture" />
						</div>
					</div>
					<div className="col-lg-6 col-xm-12">
						<h2 className="aboutTitle">About</h2>
						<p>
							Save the jeweler's loupe for diamonds more refined! The training
							wheels have not yet been removed and I wasn't first round, but
							I've worked myself into a fever-pitch with one goal in mind; to
							make computational thinking the Rosetta code of my own mind's
							intellectual property! I want to liberate these gems locked away
							for years because I had no interpreter. It's virtually impossible
							to persuade a person to follow your dreams. So here I am! And the
							objects on display here are indeed pedestrian compared to what's
							on my mind's drive. Help me in making history...
						</p>
					</div>
				</div>
			</div>
		);
}

export default About;