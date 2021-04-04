// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Component} from "react";
import {Website} from "../Classes";
import {Link} from "@tassilo/boiling-react";

export class AboutView extends Component {

	public render() {
		return <div className="about-view container">

			<div className="about-text">

				<strong>Hey there,</strong>
				<p/>

				<p>
					My name is {Website.SELF.Name} ({Website.SELF.Gender}/{Website.SELF.Age}). I live in Munich, Germany and am
					currently going to High School, doing my A-Levels. After that,
					I'm planning on studying at the Technical University of Munich.
					While studying at university, I'd love to go on a few internships
					(maybe at JetBrains? &#10084;).
				</p>

				<p>
					My strengths lie mostly around JVM-based languages (Java, Kotlin,
					a bit of Scala), however I'm also experienced in frontend (JS/TS,
					(S)CSS, React, general UX/UI). I have also dipped into the worlds
					of PHP, Lua, C#, C++ and even Assembly!
				</p>

				<p>
					I also host my tools and websites on my own VPS (maybe even a dedicated
					server one day!), which gives me a lot of experience with the Linux Shell
					and general server infrastructure.
				</p>

				<p>
					I mostly focus on open-source development (even though no one ever
					uses any of my projects), however it is still nice to know, that
					you are contributing at least somewhat to the open source world.
				</p>

				<p>
					Apart from software development and server infrastructure management,
					I do like gaming. Like, a lot. My most played games (according to Steam) are
					CS:GO, R6 Siege, PUBG, Garry's Mod and GTA 5. However, I do play a lot more games!
				</p>

			</div>

			<div>

				<img className="about-avatar" src={Website.SELF.Avatar} alt="avatar" />

				<div className="about-info">
					<img src="/img/person-64.png" alt="job" />
					<span>{Website.SELF.Name} ({Website.SELF.Age})</span>
				</div>

				<div className="about-info">
					<img src="/img/company-64.png" alt="job" />
					<span>{Website.SELF.Employment}</span>
				</div>

			</div>

		</div>;
	}

}
