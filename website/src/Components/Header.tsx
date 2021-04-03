// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Component} from "react";
import {WebsiteApplication} from "../Classes";
import {Link} from "../Components";

export class Header extends Component {

	public render() {
		const discordIcon = "https://img.icons8.com/fluent/512/000000/discord-new-logo.svg";
		const gitHubIcon = "https://img.icons8.com/fluent/512/000000/github.svg";
		const steamIcon = "https://img.icons8.com/fluent/512/000000/steam.svg";
		const twitchIcon = "https://img.icons8.com/fluent/512/000000/twitch.svg";
		const tinderIcon = "https://img.icons8.com/fluent/512/000000/tinder.svg";

		return <div className="page-header">

			<Link href="/">
				<img className="avatar" src={WebsiteApplication.AVATAR} alt="logo" />
			</Link>

			<div className="links">
				<Link href="/">Home</Link>
				<Link href="/about/">About</Link>
				<Link href="/projects/">Projects</Link>
				<Link href="/tools/">Tools</Link>
				<Link href="/downloads/">Downloads</Link>
				<Link href="/social/">Social</Link>
				<Link href="/contact/">Contact</Link>
			</div>

			<div className="social">
				<Link href="/social/discord/"><img src={discordIcon} alt="discord" /></Link>
				<Link href="/social/github/"><img src={gitHubIcon} alt="github" /></Link>
				<Link href="/social/steam/"><img src={steamIcon} alt="steam" /></Link>
				<Link href="/social/twitch/"><img src={twitchIcon} alt="twitch" /></Link>
				<Link href="/social/tinder/"><img src={tinderIcon} alt="tinder" /></Link>
			</div>

		</div>;
	}

}
