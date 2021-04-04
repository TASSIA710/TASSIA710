// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Route} from "@tassilo/boiling-react";

import {AboutRoute} from "./Routes/AboutRoute";
import {ConsoleRoute} from "./Routes/ConsoleRoute";
import {ContactRoute} from "./Routes/ContactRoute";
import {IndexRoute} from "./Routes/IndexRoute";

import {ProjectsRoute} from "./Routes/Projects/ProjectsRoute";

import {SocialRoute} from "./Routes/Social/SocialRoute";
import {SocialDiscordRoute} from "./Routes/Social/SocialDiscordRoute";
import {SocialGitHubRoute} from "./Routes/Social/SocialGitHubRoute";
import {SocialSteamRoute} from "./Routes/Social/SocialSteamRoute";
import {SocialTinderRoute} from "./Routes/Social/SocialTinderRoute";
import {SocialTwitchRoute} from "./Routes/Social/SocialTwitchRoute";



export function LoadRoutes(): Route[] {
	return [
		new AboutRoute(),
		new ConsoleRoute(),
		new ContactRoute(),
		new IndexRoute(),

		new ProjectsRoute(),

		new SocialRoute(),
		new SocialDiscordRoute(),
		new SocialGitHubRoute(),
		new SocialSteamRoute(),
		new SocialTinderRoute(),
		new SocialTwitchRoute(),
	]
}
