// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {App, Route} from "@tassilo/boiling-react";
import {Website} from "../../Classes";

export class SocialDiscordRoute extends Route {

	public constructor() {
		super("Social Discord", /\/social\/discord\//);
	}

	public async Process(matches: RegExpMatchArray): Promise<void> {
		App.Redirect(Website.SELF.SocialDiscord, true).catch(console.error);
	}

}
