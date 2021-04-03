// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Route} from "@tassilo/boiling-react";

import {IndexRoute} from "./Routes/IndexRoute";

export function LoadRoutes(): Route[] {
	return [
		new IndexRoute(),
	]
}
