// Boiling React - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Route} from "@tassilo/boiling-react";
import ReactDOM from "react-dom";

export class IndexRoute extends Route {

	public constructor() {
		super("Index", /\//);
	}

	public async Process(matches: RegExpMatchArray): Promise<void> {
		// TODO
		ReactDOM.render(<div/>, document.getElementById("root"));
	}

}
