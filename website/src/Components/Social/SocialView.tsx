// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Component} from "react";
import {SocialCard} from "../../Components";
import {Colors, Icons} from "../../Classes";

export class SocialView extends Component {

	public render() {
		return <div className="social-view container overflow-hidden">

			<div className="row g-5">

				<SocialCard social="discord" name="Discord" icon={Icons.DISCORD}
							description="Join my Discord!" />

				<SocialCard social="github" name="GitHub" icon={Icons.GITHUB}
							description="Check out my work on GitHub." />

				<SocialCard social="steam" name="Steam" icon={Icons.STEAM}
							description="Visit my Steam profile. I game a lot." />

				<SocialCard social="twitch" name="Twitch" icon={Icons.TWITCH}
							description="Very rarely I do stream." />

				<SocialCard social="tinder" name="Tinder" icon={Icons.TINDER}
							description="You wish." />

			</div>

		</div>;
	}

}
