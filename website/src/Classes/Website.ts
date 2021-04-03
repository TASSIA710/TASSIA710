// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Application, Route} from "@tassilo/boiling-react";
import {LoadRoutes} from "../Routes";
import {Person} from "../Types";

export class Website extends Application {

	public static readonly SELF: Person = {
		Avatar: "https://avatars.githubusercontent.com/u/38081490",
		Birthday: new Date(2003, 8, 26)
	};

	public constructor() {
		super("Website", "1.0.0");
	}

	public LoadRoutes(): Route[] {
		return LoadRoutes();
	}

}
