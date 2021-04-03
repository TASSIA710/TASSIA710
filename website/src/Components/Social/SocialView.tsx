// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Component} from "react";
import {SocialCard} from "../../Components";
import {Colors, Icons} from "../../Classes";

export class SocialView extends Component {

	public render() {
		return <div className="social-view container overflow-hidden">

			<div className="row g-5">

				<SocialCard name="Discord" icon={Icons.DISCORD} color={Colors.DISCORD}
							description="Join my Discord!" />

				<SocialCard name="GitHub" icon={Icons.GITHUB} color={Colors.GITHUB}
							description="Check out my work on GitHub." />

				<SocialCard name="Steam" icon={Icons.STEAM} color={Colors.STEAM}
							description="Visit my Steam profile. I game a lot." />

				<SocialCard name="Twitch" icon={Icons.TWITCH} color={Colors.TWITCH}
							description="Very rarely I do stream." />

				<SocialCard name="Tinder" icon={Icons.TINDER} color={Colors.TINDER}
							description="You wish." />

			</div>

		</div>;
	}

}
