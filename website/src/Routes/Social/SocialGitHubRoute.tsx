// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {App, Route} from "@tassilo/boiling-react";
import {Website} from "../../Classes";

export class SocialGitHubRoute extends Route {

	public constructor() {
		super("Social GitHub", /\/social\/github\//);
	}

	public async Process(matches: RegExpMatchArray): Promise<void> {
		App.Redirect(Website.SELF.SocialGitHub, true).catch(console.error);
	}

}
