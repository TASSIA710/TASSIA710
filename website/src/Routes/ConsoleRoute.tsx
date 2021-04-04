// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Route} from "@tassilo/boiling-react";
import {Views} from "../Classes";
import {ConsoleView} from "../Components";

export class ConsoleRoute extends Route {

	public constructor() {
		super("Console", /\/console\//);
	}

	public async Process(matches: RegExpMatchArray): Promise<void> {
		Views.Render(<ConsoleView/>, "console");
	}

}
