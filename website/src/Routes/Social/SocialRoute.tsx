// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Route} from "@tassilo/boiling-react";
import {Views} from "../../Classes";
import {SocialView} from "../../Components";

export class SocialRoute extends Route {

	public constructor() {
		super("Social", /\/social\//);
	}

	public async Process(matches: RegExpMatchArray): Promise<void> {
		Views.Render(<SocialView/>, "social");
	}

}
