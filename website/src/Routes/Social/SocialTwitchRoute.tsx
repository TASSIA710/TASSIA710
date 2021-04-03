// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {App, Route} from "@tassilo/boiling-react";
import {Website} from "../../Classes";

export class SocialTwitchRoute extends Route {

	public constructor() {
		super("Social Twitch", /\/social\/twitch\//);
	}

	public async Process(matches: RegExpMatchArray): Promise<void> {
		App.Redirect(Website.SELF.SocialTwitch, true).catch(console.error);
	}

}
