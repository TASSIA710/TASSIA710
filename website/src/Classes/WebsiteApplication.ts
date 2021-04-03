// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Application, Route} from "@tassilo/boiling-react";
import {LoadRoutes} from "../Routes";

export class WebsiteApplication extends Application {

	public constructor() {
		super("Website", "1.0.0");
	}

	public LoadRoutes(): Route[] {
		return LoadRoutes();
	}

}
