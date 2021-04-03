// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Route} from "@tassilo/boiling-react";

import {AboutRoute} from "./Routes/AboutRoute";
import {ContactRoute} from "./Routes/ContactRoute";
import {IndexRoute} from "./Routes/IndexRoute";

import {SocialIndexRoute} from "./Routes/Social/SocialIndexRoute";



export function LoadRoutes(): Route[] {
	return [
		new AboutRoute(),
		new ContactRoute(),
		new IndexRoute(),

		new SocialIndexRoute(),
	]
}
