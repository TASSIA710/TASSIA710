// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Application, Route} from "@tassilo/boiling-react";
import {LoadRoutes} from "../Routes";
import {Person} from "../Types";
import {Events} from "../Classes";

export class Website extends Application {

	public static readonly SELF: Person = {
		Avatar: "https://avatars.githubusercontent.com/u/38081490",
		Birthday: new Date(2003, 8, 26),

		Name: "Tassilo",
		Age: 17,
		Gender: "m",
		Employment: "Unemployed",

		SocialDiscord: "https://discord.gg/yHfceNC6",
		SocialGitHub: "https://github.com/TASSIA710",
		SocialSteam: "https://steamcommunity.com/id/tassia710",
		SocialTwitch: "https://www.twitch.tv/tassia710",
		SocialTinder: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
	};

	public constructor() {
		super("Website", "1.0.0");
	}

	public LoadRoutes(): Route[] {
		return LoadRoutes();
	}

	public async Initialize(): Promise<void> {
		Events.LoadEvent(Events.GetEvent());
	}

}
