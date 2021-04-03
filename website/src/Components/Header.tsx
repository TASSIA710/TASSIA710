// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Component} from "react";
import {Icons, Website} from "../Classes";
import {Link} from "../Components";

interface HeaderProperties {
	tab: string;
}

export class Header extends Component<HeaderProperties> {

	private classForTab(tab: string): string {
		return this.props.tab === tab ? "active" : "";
	}

	public render() {
		return <div className="page-header">

			<Link href="/">
				<img className="avatar" src={Website.SELF.Avatar} alt="logo" />
			</Link>

			<div className="links">
				<Link href="/" className={this.classForTab("home")}>Home</Link>
				<Link href="/about/" className={this.classForTab("about")}>About</Link>
				<Link href="/projects/" className={this.classForTab("projects")}>Projects</Link>
				<Link href="/tools/" className={this.classForTab("tools")}>Tools</Link>
				<Link href="/downloads/" className={this.classForTab("downloads")}>Downloads</Link>
				<Link href="/social/" className={this.classForTab("social")}>Social</Link>
				<Link href="/contact/" className={this.classForTab("contact")}>Contact</Link>
			</div>

			<div className="social">
				<Link href="/social/discord/"><img src={Icons.DISCORD} alt="discord" /></Link>
				<Link href="/social/github/"><img src={Icons.GITHUB} alt="github" /></Link>
				<Link href="/social/steam/"><img src={Icons.STEAM} alt="steam" /></Link>
				<Link href="/social/twitch/"><img src={Icons.TWITCH} alt="twitch" /></Link>
				<Link href="/social/tinder/"><img src={Icons.TINDER} alt="tinder" /></Link>
			</div>

		</div>;
	}

}
