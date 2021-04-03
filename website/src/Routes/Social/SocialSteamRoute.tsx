// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {App, Route} from "@tassilo/boiling-react";
import {Website} from "../../Classes";

export class SocialSteamRoute extends Route {

	public constructor() {
		super("Social Steam", /\/social\/steam\//);
	}

	public async Process(matches: RegExpMatchArray): Promise<void> {
		App.Redirect(Website.SELF.SocialSteam, true).catch(console.error);
	}

}
