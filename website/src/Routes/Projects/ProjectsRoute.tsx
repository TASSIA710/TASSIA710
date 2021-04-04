// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Route} from "@tassilo/boiling-react";
import {Views} from "../../Classes";
import {ProjectsView} from "../../Components";

export class ProjectsRoute extends Route {

	public constructor() {
		super("Projects", /\/projects\//);
	}

	public async Process(matches: RegExpMatchArray): Promise<void> {
		Views.Render(<ProjectsView/>, "projects");
	}

}
