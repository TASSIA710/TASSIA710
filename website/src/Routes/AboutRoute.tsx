// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Route} from "@tassilo/boiling-react";
import {Views} from "../Classes";
import {AboutView} from "../Components";

export class AboutRoute extends Route {

	public constructor() {
		super("About", /\/about\//);
	}

	public async Process(matches: RegExpMatchArray): Promise<void> {
		Views.Render(<AboutView/>, "about");
	}

}
